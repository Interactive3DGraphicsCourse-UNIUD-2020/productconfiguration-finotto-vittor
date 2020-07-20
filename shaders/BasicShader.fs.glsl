// Fragment
#define MAX_LIGHTS 2
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];

uniform vec4 color;
varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;

vec3 vCamPos;
vec3 vLightPos;
const float PI = 3.14159;
vec4 simpleLight(Light light){
    vLightPos = vec3(viewMatrix * vec4(light.position,1.0));
    vCamPos = (vModelViewMatrix * vec4(vPosition,1.0)).xyz;
    vec3 s = normalize(vLightPos-vCamPos);
    vec4 d = light.intensity * color * max(dot(s,vNormal),0.0)/(4.0*PI* length(vLightPos-vCamPos)); 
    return d;
}

void main(){

    vec4 result= vec4(0,0,0,0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result + simpleLight(light[i]);
    } 

    gl_FragColor=result;
}