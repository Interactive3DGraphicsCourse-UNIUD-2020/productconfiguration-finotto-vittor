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
        this.rotation = value;
        this.updateDataInModel()
    }
    model;
    gui;
    constructor(){
    }
    setup(){

        gui = new dat.GUI();

        gui.add(this,'scale',0.1,3);
        gui.add(this,'rotation',-180,180);
    }
    updateDataInModel(){
        // TODO add model transofrmation
    }
    setModel(){
        
    }
}