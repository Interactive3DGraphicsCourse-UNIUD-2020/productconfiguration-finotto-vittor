
let allCanvas =[];
for(let i=1;i<=10;i++){
allCanvas[i]= new CanvasHandler(("obj"+i));
}
let gui = new GUIBinder();
gui.setup();
