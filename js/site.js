
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
let light = new THREE.PointLight(new THREE.Color(1,1,1),1,5,2);
let cube = new THREE.BoxGeometry(1,1,1);

let mat = new THREE.MeshPhysicalMaterial({color:new THREE.Color(1,0,0),envMap:cubeMap,metalness:0.5,roughness:0.5});
let mesh = new THREE.Mesh(cube,mat);

// Setup Scene
light.position.set(0,1,0);
canvas.camera.position.z = 5;
canvas.scene.add(mesh);
canvas.scene.add(light);
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