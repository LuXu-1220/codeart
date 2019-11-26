var xspeed = 1;
var xpos = 0;
var cloud;
var sound;
var grass;
var img1;
var img2;
var img3;
var img4;
var img5;
function preload() {
  cloud=loadImage('clound.png');
  sound=loadSound('mariogame.mp3');
  grass = loadImage('grass.png');
  img1= loadImage('background.PNG');
  img2= loadImage('mouse.png');
  img3= loadImage('sun1.png');
  img4=loadImage('pikachu.png');
  img5=loadImage('sun2.png');
}

function setup() {
  createCanvas(400,400);
  noCursor();
  sound.play();
}

function draw() {

  background(img1,0,0);
  image(cloud, xpos, 80);
  image(img2,mouseX,mouseY);

  if (xpos > width) {

    xspeed = -1;
  }

  if (xpos< 0){

    xspeed = 1;
  }
    xpos += xspeed;

  if(mouseIsPressed){
    image(img4,170,205);
  }
  else{image(grass,220,280);
        }
image(img2, mouseX,mouseY);

  if(mouseIsPressed){
    image(img5,20,20);
  }
  else{image(img3,20,20);
        }
image(img2, mouseX,mouseY);

}
