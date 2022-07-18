var knight, knightImg;
var ground1;
var ground2;
var ground3;
var ground4;
var ground5;
var ground1Img;
var ground2Img;
var ground3Img;
var ground4Img;
var ground5Img;
var dragon, dragonImg;
var win, winImg;
var gameover, gameoverImg;

function preload(){
  knightImg = loadImage("assets/knight.jpg");
  dragonImg = loadImage("assets/dragon.jpg");
  gameoverImg = loadImage("assets/gameOver.png");
  winImg = loadImage("assets/win.jpg");
  ground1Img = loadImage("assets/ground.jpg");
  ground2Img = loadImage("assets/ground.jpg");
  ground3Img = loadImage("assets/ground.jpg");
  ground4Img = loadImage("assets/ground.jpg");
  ground5Img = loadImage("assets/ground.jpg");
}

function setup () {
  createCanvas(1365,650);

  knight = createSprite(50,300, 50, 50);
  knight.addImage(knightImg);
  knight.scale = 0.2;
  knight.setCollider("rectangle",0,0,450,750);

  gameover = createSprite(600,100, 50, 50);
  gameover.addImage(gameoverImg);
  gameover.visible = false;

  win = createSprite(600,300, 50, 50);
  win.addImage(winImg);
  win.scale = 0.5;
  win.visible = false;

  dragon = createSprite(1110,350, 50, 50);
  dragon.addImage(dragonImg);
  dragon.scale = 0.8;
  
  ground1 = createSprite(50,400,100,50);
 ground1.visible = true;
 ground1.scale = 0.2;
 ground1.addImage(ground1Img);

ground2 = createSprite(200,450,100,50);
 ground2.visible = true;
 ground2.scale = 0.2;
 ground2.addImage(ground2Img);
  
 ground3 = createSprite(350,400,100,50);
 ground3.visible = true;
 ground3.scale = 0.2;
 ground3.addImage(ground3Img);

 ground4 = createSprite(550,450,100,50);
 ground4.visible = true;
 ground4.scale = 0.2;
 ground4.addImage(ground4Img);

 ground5 = createSprite(750,400,100,50);
 ground5.visible = true;
 ground5.scale = 0.2;
 ground5.addImage(ground5Img);
}


function draw() {
  background(500);
  
 
 knight.y += 5;

if(knight.collide(dragon)) {
  knight.visible = false;
  ground1.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false;
  ground5.visible = false;
  dragon.visible = false;
  win.visible = true;
}
 if(knight.y === 700) {
  knight.visible = false;
  ground1.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false;
  ground5.visible = false;
  dragon.visible = false;
  gameover.visible = true;
 }


 if (keyIsDown(RIGHT_ARROW)) {
  knight.x += 10;
 }

 if (keyIsDown(LEFT_ARROW)) {
  knight.x -= 10;
 }

 if (keyIsDown(UP_ARROW)) {
  knight.y -= 15;
 }

 knight.collide(ground1);
 knight.collide(ground2);
 knight.collide(ground3);
 knight.collide(ground4);
 knight.collide(ground5);

 drawSprites();
}
