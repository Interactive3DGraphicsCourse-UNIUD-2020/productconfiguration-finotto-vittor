let canvas= new CanvasHandler("body");
let gui = new GUIBinder();
canvas.setup();
gui.setup();
let cube = new THREE.BoxGeometry(1,1,1);
let mat = new THREE.MeshBasicMaterial({color:new THREE.Color(1,0,0)});
let mesh = new THREE.Mesh(cube,mat);
canvas.camera.position.z = 5;
canvas.scene.add(mesh);
canvas.update=()=>{
    (mesh).rotation.y+=0.01;
}
canvas.renderLoop();