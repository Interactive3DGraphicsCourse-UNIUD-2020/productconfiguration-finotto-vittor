class GUIBinder{
    _scale=1;
    get scale(){
        return this._scale;
    }
    set scale(value){
        this._scale = value;
        this.updateDataInModel()
    }
    _rotation=0;
    get rotation(){
        return this._rotation;
    }
    set rotation(value){
        this._rotation = value;
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
        this.gui.add(this,'rotation',-Math.PI/2,Math.PI/2);
        this.gui.add(this,'roughness',0,1);
        this.gui.add(this,'metalness',0,1);
        this.gui.add(this,'specular',0,1);
    }
    updateDataInModel(){
        // TODO add model transofrmation
        // (this.model).matrixAutoUpdate = false;
        this.model.rotation.y = this.rotation;
        this.mat.roughness = this.roughness;
        this.mat.metalness = this.metalness;
        this.mat.specular = this.specular;
    }
    setModel(){
        
    }
}