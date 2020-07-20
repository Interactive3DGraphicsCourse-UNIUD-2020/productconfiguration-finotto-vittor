// Fragment
#define MAX_LIGHTS 2
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

varying vec3 vNormal;
varying mat4 vViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;

vec3 vCamPos;
vec3 vLightPos;
vec4 tColor;
const float PI = 3.14159;

vec3 schlick(float ldoth,vec3 color){
    //vec3 minF0 = vec3(0.04); // dieletrics
    vec3 f0 =color*metalness; //mix(minF0,color,metalness); // lerp between metal and non metal
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
    vec3 lpos = (vViewMatrix* vec4(light.position,1.0)).xyz;
    vec3 pos = (vViewMatrix * vec4(vPosition,1.0)).xyz;
    vec3 l = normalize(lpos-pos); 
    vec3 n = normalize(vNormal);
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
    vec3 result = (PI * spec * light.color *ndotl);
    return result;
}

void main(){
    tColor = texture2D(map,vUV);
    vec3 result= vec3(0.0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result+microfacet(light[i]);
    } 
    gl_FragColor=vec4(result,1.0);
}