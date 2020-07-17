
let canvas= new CanvasHandler("body");
let gui = new GUIBinder();

canvas.setup();
gui.setup();

let orbitControl = new THREE.OrbitControls(canvas.camera,canvas.renderer.domElement);
let cubeMap =  new THREE.CubeTextureLoader().setPath('textures/Yokohama3/').load([
    'posx.jpg',
    'negx.jpg',
    'posy.jpg',
    'negy.jpg',
    'posz.jpg',
    'negz.jpg'
]);
let cube = new THREE.BoxGeometry(1,1,1);
let mat = new THREE.MeshPhysicalMaterial({color:new THREE.Color(1,1,1),envMap:cubeMap,metalness:1,roughness:0.5});
let mesh = new THREE.Mesh(cube,mat);

// Setup Scene
canvas.camera.position.z = 5;
canvas.scene.add(mesh);
// CubeMap
canvas.scene.background = cubeMap


//bind model to controls
gui.model = mesh;
gui.mat = mat;
console.log(gui.model);


// Render Loop
canvas.update=()=>{
    //mesh.rotateY(gui.rotation);
    orbitControl.update();
}
canvas.renderLoop();