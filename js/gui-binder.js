class GUIBinder{

    _rotationx=0;
    get rotationx(){
        return this._rotationx;
    }
    set rotationx(value){
        this._rotationx = value;
        this.updateDataInModel()
    }
    _rotationy=0;
    get rotationy(){
        return this._rotationy;
    }
    set rotationy(value){
        this._rotationy = value;
        this.updateDataInModel()
    }
    _rotationz=0;
    get rotationz(){
        return this._rotationz;
    }
    set rotationz(value){
        this._rotationz = value;
        this.updateDataInModel()
    }
    _roughness=0.5;
    get roughness(){
        return this._roughness;
    }
    set roughness(val){
        this._roughness = val;
        this.updateDataInModel();
    }
    _metalness=0.5;
    get metalness(){
        return this._metalness;
    }
    set metalness(val){
        this._metalness = val;
        this.updateDataInModel();
    }
    _specular= 0.5;
    get specular(){
        return this._specular;
    }
    set specular(val){
        this._specular = val;
        this.updateDataInModel();
    }
    model;
    mat;
    gui;
    constructor(){
    }
    setup(){

        this.gui = new dat.GUI();
        this.gui.add(this,'rotationx',-Math.PI/2,Math.PI/2);
        this.gui.add(this,'rotationy',-Math.PI/2,Math.PI/2);
        this.gui.add(this,'rotationz',-Math.PI/2,Math.PI/2);
        this.gui.add(this,'roughness',0,1);
        // this.gui.add(this,'metalness',0,1);
        this.gui.add(this,'specular',0,1);
    }
    updateDataInModel(){
        // TODO add model transofrmation
        // (this.model).matrixAutoUpdate = false;
        this.model.rotation.x = this.rotationx;
        this.model.rotation.y = this.rotationy;
        this.model.rotation.z = this.rotationz;
        this.mat.uniforms.roughness.value = this.roughness;
        this.mat.metalness = this.metalness;
        // this.mat.specular = this.specular;
    }
    setModel(){

    }
}