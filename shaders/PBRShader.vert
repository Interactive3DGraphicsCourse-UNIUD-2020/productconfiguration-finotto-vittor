// vertex

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
    vModelViewMatrix = modelViewMatrix ;
    vNormal = normalMatrix *normal;
    vPosition =  position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

}