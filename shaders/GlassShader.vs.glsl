// vertex

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;

void main(){
    vModelViewMatrix = modelViewMatrix ;
    vNormal = normalMatrix *normal;
    vPosition =  position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

}