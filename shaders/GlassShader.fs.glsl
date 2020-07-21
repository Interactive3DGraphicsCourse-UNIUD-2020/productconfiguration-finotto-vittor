// Fragment
#define MAX_LIGHTS 2
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];
uniform float reflection;
uniform float eta;

uniform samplerCube envMap;

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;


vec3 vCamPos;
vec3 vLightPos;
vec4 tColor;

vec3 inverseTransformDir(vec3 dir, mat4 matrix){
    return normalize((vec4(dir,0.0)*matrix).xyz);
}

void main(){
    vec3 worldPos = vec3(vModelViewMatrix * vec4(vPosition,1.0));
    vec3 worldNorm = vec3(vModelViewMatrix * vec4(vNormal,0.0));
    vec3 worldView = normalize(cameraPosition-worldPos);
    vec3 ReflectDir =normalize(reflect(-worldView,worldNorm));// inverseTransformDir(vNormal,viewMatrix)*vec3(-1,1,1);
    vec3 RefractDir =normalize(refract(-worldView,worldNorm,eta));
    gl_FragColor=mix(textureCube(envMap,vec3(RefractDir.x,-RefractDir.y,RefractDir.z)),textureCube(envMap,ReflectDir),reflection);
}
//textureCube(envMap,vec3(RefractDir.x,-RefractDir.y,RefractDir.z));