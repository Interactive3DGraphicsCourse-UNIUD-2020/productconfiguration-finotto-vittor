// Fragment
#define MAX_LIGHTS 4
#define LEVELS 3.0
struct Light{
    vec3 position;
    vec3 color;
    float intensity;
};

uniform Light light[MAX_LIGHTS];
uniform float ambient;
uniform sampler2D map;
uniform bool useMap;
varying vec4 vColor;
varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;
vec3 vCamPos;
vec3 vLightPos;

const float PI = 3.14159;

vec4 simpleLight(Light light){

    vec4 texColor;
    if(useMap==true){
       texColor = texture2D(map,vUV);
    } else{
        texColor = vColor;
    }
    vLightPos = vec3(viewMatrix * vec4(light.position,1.0));
    vCamPos = (viewMatrix * vec4(vPosition,1.0)).xyz;
    vec3 s = normalize(vLightPos-vCamPos);
    float lightIntensity = floor(max(dot(s,vNormal),0.0)*LEVELS)/LEVELS;
    return (vec4(light.color,1.0) * lightIntensity) * texColor; //(1.0*PI* pow(length(vLightPos-vCamPos),1.0/2.2));
    //return vec4(light.color,1.0)*texColor * dot(s,vNormal);//
}

void main(){
    vec4 result= vec4(0,0,0,0);
    for(int i =0;i<MAX_LIGHTS;i++){
        result=result + simpleLight(light[i]);
    }
    gl_FragColor =result;
}
