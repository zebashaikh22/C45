var plr;
var enemy, enemyHead;
var bg;
var sword;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var lives = 3;
var score = 0;


function preload(){
  plrWalk = loadAnimation("PLR/Walk/walk1.png", "PLR/Walk/walk1.png", "PLR/Walk/walk1.png", "PLR/Walk/walk1.png");
  enemyRun = loadAnimation("ENEMIES/2_enemies_1_run_000.png", "ENEMIES/2_enemies_1_run_001.png", "ENEMIES/2_enemies_1_run_002.png",
  "ENEMIES/2_enemies_1_run_003.png", "ENEMIES/2_enemies_1_run_004.png", "ENEMIES/2_enemies_1_run_005.png");
  bg1Img = loadImage("BG/01.jpg");
  bg2Img = loadImage("BG/War.png");
  bg3Img = loadImage("BG/War2.png");
  bg4Img = loadImage("BG/War3.png");
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(400, 200);
  bg.addImage(bg1Img);
  bg.scale = 1.5;
  bg.velocityX = -2;

  plr = createSprite(100, 200, 50, 50);
  plr.addAnimation("Walk", plrWalk);
  plr.scale = 0.8;
  plr.setCollider("rectangle", -20, 0, 50, 80);

  ground1 = createSprite(85, 295, 170, 20);
  ground1.visible = false;
  ground1.velocityX = -2;

  ground2 = createSprite(365, 264, 130, 20);
  ground2.velocityX = -2;

}

function draw() {
  background(255, 255, 255); 

  if(keyDown("right")){
    plr.velocityX = 4;
  }
  if(keyDown("up")){
   // plr.velocityY = -4;
  }
  if(keyDown("left")){
    plr.velocityX = -4;
  }
  if(keyDown("down")){
    plr.velocityY = 4;
  }
  if(keyDown("space")){
    plr.velocityY = -5;
  }
  plr.velocityY += 0.3;

  plr.collide(ground1);
  plr.collide(ground2);
  
  //plr.debug = true;

  if(bg.x<0){
    bg.x = 400;
  }
  if(ground1.x<0){
    ground1.x = 400;
  }
  if(ground2.x<0){
    ground2.x = 400;
  }


  drawSprites();
}






