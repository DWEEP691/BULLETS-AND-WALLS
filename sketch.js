var bullet,speed,weight,wall,thickness; 
var BRE,WLE;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,55,25);
  bullet.shapeColor = "white";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "white";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
background(0,0,0);

bullet.velocityX = speed;

if(HC(bullet,wall)) {
  bullet.velocityX = 0;
  var TH = thickness^3;
  var THI = thickness*thickness*thickness;
  var damage = 0.5*speed*speed/TH;

  console.log(TH,THI);

  if(damage>10) {
    wall.shapeColor = color(256,0,0);
    bullet.shapeColor = color(256,0,0);
  }
  else if(damage<10) {
    wall.shapeColor = color(0,256,0);
    bullet.shapeColor = color(0,256,0);
  }
}

drawSprites();

}