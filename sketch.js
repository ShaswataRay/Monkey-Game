var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score=0;
var survivalTime=0;
var bg, bgImage;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImage=loadImage("a monkey go happy 1 background pic final.png");
 
}



function setup() {
 createCanvas(600, 390);
  
//for background image
  
  bg=createSprite(300, 200);
  bg.addImage(bgImage);
  bg.scale=1.5;
  
monkey=createSprite(100,200)
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1+1/50;

// so that the monkey looks like that is in the standing on the ground of the image
  ground=createSprite(200,380,900,15);
  ground.velocityX=-4
  ground.x = ground.width/2;
  console.log(ground);
  ground.visible=false;

  
obstacleGroup=createGroup();
bananaGroup=createGroup();
}


function draw() {
  background(220);
  //making monkey's collider small and the monkey stand on the invisible ground
  
  monkey.setCollider("circle",0,0,150);
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyWentDown("space")){
    monkey.velocityY=-15;
  }
  // If the monkey is touching the banana and obstacle, the score will increase or decrease respectively
  if (monkey.isTouching(bananaGroup)){
    score=score+1;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    score=score-1;
  }
spawnObstacle();
spawnBanana();
  
drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,400,50);
  
  }
   
function spawnObstacle(){
  
  if (frameCount % 80===0) {
    obstacle=createSprite(700,350);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-8;
obstacle.scale=0.1+1/13;
    
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}

function spawnBanana(){
  if(frameCount % 80===0){
banana=createSprite(700,200);
banana.addImage(bananaImage);
banana.velocityX=-8;
banana.scale=0.1+1/60;
banana.y=Math.round(random(100,270))
    
    banana.lifetime=300;
    bananaGroup.add(banana);
  }
}
