
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
let light = new THREE.PointLight(new THREE.Color(1, 1, 1), 10, 5, 2);
let cube = new THREE.BoxGeometry(1, 1, 1);
let mat, mesh;

/**
 * This bad code needed to be sure that all needed Shaders are loaded before creating material
 * could be improved
 */
ResourceManager.loadResource(Resources.BasicVertexShader(), (res) => {
    let vs1 = res;
    ResourceManager.loadResource(Resources.BasicFragmentShader(), (res) => {
        let fs1 = res;
        // code here 
        mat = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Vector4(0, 0, 1, 0.5) },
                metalness: { value: 0.5 },
                roughness: { value: 0.5 },
                specular: { value: 0.5 },
                light: {
                    value: {
                        position: light.position,
                        color: light.color,
                        intensity: light.intensity
                    }
                }
            },
            vertexShader: vs1,
            fragmentShader: fs1
        });
        mesh = new THREE.Mesh(cube, mat);
        canvas.scene.add(mesh);
    });
});

// Test material
// let mat = new THREE.MeshPhysicalMaterial({color:new THREE.Color(1,0,0),envMap:cubeMap,metalness:0.5,roughness:0.5});
// let vs1 = (document.querySelector("#vs1")).textContent;
// let fs1 = (document.querySelector("#fs1")).textContent;
// Setup Scene
light.position.set(0, 1, 0);
canvas.camera.position.z = 5;

// CubeMap
canvas.scene.background = cubeMap;

//bind model to controls
gui.model = mesh;
gui.mat = mat;

canvas.scene.add(light);
// Render Loop
canvas.update = () => {
    //mesh.rotateY(gui.rotation);
    orbitControl.update();
}
canvas.renderLoop();