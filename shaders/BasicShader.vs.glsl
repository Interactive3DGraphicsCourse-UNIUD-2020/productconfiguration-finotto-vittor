// vertex

void main(){
    vec4 vPosition = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    gl_Position = vPosition;
}
