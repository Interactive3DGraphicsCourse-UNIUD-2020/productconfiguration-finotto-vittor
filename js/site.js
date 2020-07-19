
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
ResourceManager.loadResource(Resources.PhongVertexShader(), (res) => {
    let vs1 = res.responseText;
    ResourceManager.loadResource(Resources.PhongFragmentShader(), (res) => {
        let fs1 = res.responseText;
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
        console.log(mat);
        mesh = new THREE.Mesh(cube, mat);
        canvas.scene.add(mesh);
        //bind model to controls
        gui.model = mesh;
        gui.mat = mat;
    });
});

// Setup Scene
light.position.set(0, 1, 0);
canvas.camera.position.z = 5;
canvas.scene.add(light);

// CubeMap
canvas.scene.background = cubeMap;
// Render Loop
canvas.update = () => {
    //mesh.rotateY(gui.rotation);
    orbitControl.update();
}
canvas.renderLoop();