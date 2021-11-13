//variabili globali
let cam;

function setup() {
  createCanvas(320, 240);
  cam = createCapture(VIDEO);
  cam.size(320,240);
  cam.hide();
  
}

function draw() {
  background(0);
  cam.loadPixels();
  for (var y=0; y<240; y+=2){
    for (var x=0; x<320; x+=1){
      //indice per scorrere l'array pixels
      var i = ((320+x)+y*320)*4;
      
      //calcolare il valore di luminosità
      var r = cam.pixels[i+1];
      var g = cam.pixels[i+2];
      var b = cam.pixels[i+3];
      
      var I = (r + g + b)/3;
      
      stroke(255, 255, 255);
      strokeWeight(1);
      
      //efi arazi
      point (x, y - I/5);   
    } 
  }
}