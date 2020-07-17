import THREE from "three";

let scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader().setPath('textures/Yokohama3/').load([
'posx.jpg',
'negx.jpg',
'posy.jpg',
'negy.jpg',
'posz.jpg',
'negz.jpg'
]);