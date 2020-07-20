// Fragment
#define MAX_LIGHTS 2
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];
uniform vec4 color;
uniform float roughness;
uniform float ambient;
uniform sampler2D map;

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;

vec3 vCamPos;
vec3 vLightPos;
vec3 tColor;
const float PI = 3.14159;

vec3 schlick(float ldoth){
    vec3 f0 = tColor;//color.xyz;    // metal workflow
    //vec3 f0 = vec3(0.04);// dielettric workflow
    
    return f0 + ((1.0-f0) * pow(1.0-ldoth,5.0));
}
float ggx(float ndoth){
    float alpha = pow( roughness,4.0);
    float d = pow(ndoth,2.0) * (alpha-1.0) + 1.0;
    return alpha / (PI * d * d);
}
float smith(float dotProd){
    float k = (roughness + 1.0) * (roughness +1.0)/ 8.0;
    float denom = dotProd * (1.0-k) + k;
    return 1.0 / denom;
}
vec3 microfacet(Light light,vec3 position, vec3 normal){
     vec3 diffuse =vec3(0.0); // metal work flow
    //vec3 diffuse = tColor;//color.xyz; // dielettric workflow
    vec3  lPosCamCoord = (vModelViewMatrix * vec4(light.position,1.0)).xyz;
    vec3 l = lPosCamCoord - vPosition;
    float dist = length(l);
    vec3 lightIntensity = vec3(light.intensity*light.color)/(dist*dist);
    vec3 v = normalize(-vPosition);
    vec3 h = normalize(v+l);
    float ndoth = max(dot(normal,h),0.00004);
    float ldoth = max(dot(l,h),0.00004);
    float ndotl = max(dot(normal,l),0.00004);
    float ndotv = max(dot(normal,v),0.00004);

    vec3 specular = 0.25 *ggx(ndoth)* schlick(ldoth) * smith(ndotl)* smith(ndotv);
    return (diffuse + PI*specular)*lightIntensity *ndotl;
}

void main(){
    // vec3 cDiff/PI;
    // vec3 cLight = light.color * light.intensity;
    tColor = texture2D(map,vUV).xyz;
    vec3 l = vec3(0.0); 
    vec3 result= vec3(0.0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result+microfacet(light[i],vPosition,vNormal);
    } 
    gl_FragColor=vec4(result,1.0);
}