var Arijeet,Garima;

function setup() {
  createCanvas(800,400);

  Arijeet=createSprite(400, 200, 50, 50);
  Arijeet.shapeColor="red";
  Arijeet.debug=true;

  Garima=createSprite(57,24,60,100);
  Garima.shapeColor="purple";
  Garima.debug=true;

}

function draw() {
  background("lavender"); 

  Garima.x=mouseX;
  Garima.y=mouseY;

  if(Garima.x-Arijeet.x<Garima.width/2+Arijeet.width/2&&
    Arijeet.x-Garima.x<Garima.width/2+Arijeet.width/2&&
    Garima.y-Arijeet.y<Garima.height/2+Arijeet.height/2&&
    Arijeet.y-Garima.y<Garima.height/2+Arijeet.height/2){
    Arijeet.shapeColor="blue";
    Garima.shapeColor="blue";
  }
  else{
  Arijeet.shapeColor="red";
  Garima.shapeColor="purple";
}

  drawSprites();
}