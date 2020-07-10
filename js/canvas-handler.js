class CanvasHandler{
    scene;
    camera;
    renderer;
    canvasElement;
    drawCallBack;
    /**
     * 
     * @param {string} id id of element to use as canvas 
     */
    constructor(id){
        console.log("ctor canvas");
        this.setup(id);
    }
    /**
     * 
     * @param {string} elementId 
     */
    setup(elementId){
        console.log("setup");
        if(this.bindCanvasElement(elementId)){
            this.createScene();
            this.createCamera();
            this.createRenderer();
            this.canvasElement.appendChild(this.renderer.domElement);
        }else{
            console.log("error");
        }
    }
    bindCanvasElement(elementId){
        if(elementId){
            console.log(elementId);
            this.canvasElement = document.getElementById(elementId);
            console.log(this.canvasElement);
            return true;
        }
        return false;
    }
    createScene(){
        this.scene = new THREE.Scene();
    }
    createCamera(){
        let aspect = (this.canvasElement.clientWidth/this.canvasElement.clientHeight);
        this.camera = new THREE.PerspectiveCamera(75,aspect,0.1,100);
    }
    createRenderer(){
        this.renderer = new THREE.WebGLRenderer({antialias:true});
    }
    renderLoop(){
        requestAnimationFrame(this.renderLoop);
        this.renderer.render(this.scene,this.camera);
    }
}