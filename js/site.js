
let canvas = new CanvasHandler("body");
let gui = new GUIBinder();

canvas.setup();
gui.setup();

let orbitControl = new THREE.OrbitControls(canvas.camera, canvas.renderer.domElement);

let cubeMap = new THREE.CubeTextureLoader().setPath('textures/Yokohama3/').load([
    'posx.jpg',
    'negx.jpg',
    'posy.jpg',
    'negy.jpg',
    'posz.jpg',
    'negz.jpg'
]);
let light = new THREE.PointLight(new THREE.Color(0, 0, 1),3, 5, 2);
let light2 = new THREE.PointLight(new THREE.Color(0, 1, 0), 3, 5, 2);
let cube = new THREE.BoxGeometry(1, 1, 1);
let mat, mesh;

// Setup Scene
light2.position.set(1,0,0);
light.position.set(0, 1, 0);
canvas.camera.position.z = 5;
canvas.scene.add(light);
canvas.scene.add(light2);
/**
 * This bad code needed to be sure that all needed Shaders are loaded before creating material
 * could be improved
 */
ResourceManager.loadResource(Resources.PBRVertexShader(), (res) => {
    let vs1 = res.responseText;
    ResourceManager.loadResource(Resources.PBRFragmentShader(), (res) => {
        let fs1 = res.responseText;
        // code here 
        mat = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Vector4(1, 1, 1,1) },
                ambient:{value:0.1},
                light: {
                    value:[ 
                        {position: light.position, color: light.color, intensity: light.intensity},
                        {position: light2.position, color: light2.color, intensity: light2.intensity}
                    ]
                }
            },
            vertexShader: vs1,
            fragmentShader: fs1
        });
        mesh = new THREE.Mesh(cube, mat);
        canvas.scene.add(mesh);
        //bind model to controls
        gui.model = mesh;
        gui.mat = mat;
    });
});


// CubeMap
canvas.scene.background = cubeMap;
// Render Loop
canvas.update = () => {
    //mesh.rotateY(gui.rotation);
    orbitControl.update();
}
canvas.renderLoop();