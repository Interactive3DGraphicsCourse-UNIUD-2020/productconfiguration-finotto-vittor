// vertex

varying vec3 vNormal;
varying mat4 vViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;

void main(){
    vUV = uv;
    vViewMatrix = viewMatrix ;
    vNormal = normal;
    vPosition =  position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

}