// vertex

varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
void main(){
    vPosition = position;
    vModelViewMatrix = modelViewMatrix;
    vNormal = vec3(normalMatrix * normal);
    vec4 vPosition = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    gl_Position = vPosition;
}