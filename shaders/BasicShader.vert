// vertex
attribute vec3 color;
varying vec3 vNormal;
varying mat4 vModelViewMatrix;
varying vec3 vPosition;
varying vec2 vUV;
varying vec4 vColor;
void main(){
    vColor = vec4(color,1.0);
    vUV = uv;
    vPosition = position;
    vModelViewMatrix = modelViewMatrix;
    vNormal = normalize(vec3(normalMatrix * normal));
    vec4 vPosition = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    gl_Position = vPosition;
}