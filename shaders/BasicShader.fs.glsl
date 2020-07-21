// Fragment
#define MAX_LIGHTS 2
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];
uniform vec4 color;
uniform float ambient;
uniform sampler2D map;

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;
vec3 vCamPos;
vec3 vLightPos;

const float PI = 3.14159;

vec4 simpleLight(Light light){
    vec4 texColor = texture2D(map,vUV);
    vLightPos = vec3(viewMatrix * vec4(light.position,1.0));
    vCamPos = (vModelViewMatrix * vec4(vPosition,1.0)).xyz;
    vec3 s = normalize(vLightPos-vCamPos);
    return ((vec4(light.color,1.0) * light.intensity) * texColor * max(dot(s,vNormal),0.0))/(1.0*PI* length(vLightPos-vCamPos)); 
    
}

void main(){
    vec4 result= vec4(0,0,0,0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result + simpleLight(light[i]);
    } 
    gl_FragColor =result;
}