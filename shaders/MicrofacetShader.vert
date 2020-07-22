// vertex

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;

void main(){
    vUV = uv;
    vModelViewMatrix = modelViewMatrix ;
    vNormal = normalMatrix *normal;
    vPosition =  position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

}