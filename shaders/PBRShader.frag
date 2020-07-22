// Fragment
#extension GL_OES_standard_derivatives : enable
#define MAX_LIGHTS 4
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];
uniform float metalness;
uniform float roughness;
uniform vec4 color;

uniform sampler2D map;
uniform samplerCube envMap;
uniform sampler2D normalMap;

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;

vec3 vCamPos;
vec3 vLightPos;
vec4 tColor;
vec3 tNormal;
const float PI = 3.14159;

vec3 schlick(float ldoth,vec3 color){
    vec3 minF0 = vec3(0.04); // dieletrics
    vec3 f0 = mix(color,minF0,metalness); // lerp between metal and non metal
    return f0 + (vec3(1.0)-f0)* pow(1.0-ldoth,5.0); 
}
float ggx(float ndoth){
    float alpha2 = pow(roughness,4.0);
    float d = pow(ndoth,2.0) * (alpha2 - 1.0)+1.0;
    return alpha2/ (PI * d * d);
}
float G1(float dot,float k){
    return dot/((dot*(1.0-k))+k);
}
float smith(float ndotv,float ndotl){
    float k = pow(roughness,2.0);
    return G1(ndotl,k)* G1(ndotv,k);
}
vec3 microfacet(Light light){
    vec3 lpos = (viewMatrix* vec4(light.position,1.0)).xyz;
    vec3 pos = (vModelViewMatrix* vec4(vPosition,1.0)).xyz;
    vec3 l = normalize(lpos-pos); 
    vec3 n = normalize(tNormal);
    vec3 v = normalize(-pos);
    vec3 h = normalize(v+l);

    float nonZero = 0.000002;
    float ndotl = max(dot(n,l),nonZero);
    float ndoth = max(dot(n,h),nonZero);
    float ndotv = max(dot(n,v),nonZero);
    float ldoth = max(dot(l,h),nonZero);
    float vdoth = max(dot(v,h),nonZero);

    vec3 spec =
                schlick(ldoth,tColor.xyz) *
                smith(ndotv,ndotl) *
                ggx(ndoth) /
                (4.0 * ndotl * ndotv);
    vec3 minDiffuse = vec3(0.0); // metallic
    vec3 diffuse = mix(color.xyz,minDiffuse.xyz,metalness); // lerp between metal and non metal
    vec3 result = (PI * spec * (light.color * light.intensity) *ndotl);
    return result;
}
vec3 perturbNormal(vec3 eye,vec3 norm){
    vec3 q0 = dFdx(eye.xyz);
    vec3 q1 = dFdy(eye.xyz);
    vec2 st0 = dFdx(vUV.st);
    vec2 st1 = dFdy(vUV.st);

    vec3 S = normalize(q0 *st1.t - q1 *st0.t);
    vec3 T = normalize(-q0*st1.s + q1 * st0.s);
    vec3 N = norm;

    vec3 mapN = texture2D(normalMap,vUV).xyz *2.0 -1.0;
    mapN.xy = 1.0 * mapN.xy;
    mat3 tsn = mat3(S,T,N);
    return normalize(tsn * mapN);
} 
void main(){
    tColor = texture2D(map,vUV);
    //perturbNormal((vModelViewMatrix * vec4(cameraPosition,1.0)).xyz,(vModelViewMatrix* vec4(vNormal,1.0)).xyz);
    tNormal =vNormal;// texture2D(normalMap,vUV).xyz;

    vec3 worldPos = vec3(vModelViewMatrix * vec4(vPosition,1.0));
    vec3 worldNorm = vec3(vModelViewMatrix* vec4(vNormal,0.0));
    vec3 worldView = normalize(cameraPosition - worldPos);
    vec3 ReflectDir =normalize(reflect(-worldView,worldNorm));
    
    vec3 envColor = textureCube(envMap,ReflectDir).xyz;
    vec3 result= vec3(0.0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result+microfacet(light[i]);
    } 
    gl_FragColor = vec4(result,1.0)*roughness+ vec4(envColor,1.0)*(1.0-roughness);
    //(vec4(result,1.0)*roughness*(1.0-dot(worldNorm,worldPos)) +(vec4(envColor,1.0)*0.5)*(1.0-roughness)*(dot(worldNorm,worldPos)));//mix((vec4(envColor,1.0)),vec4(result,1.0),roughness);
   

}