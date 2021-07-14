
var trex ,trex_running;
var ground,groundImg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,600)
  
  //create a trex sprite
 trex= createSprite(70,422,10,10)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5;
 ground= createSprite(300,445,600,5);
 ground.addImage("grd",groundImg);

}

function draw(){
  background(0)
  ground.velocityX=-6
  if (ground.x < 0){ 
    ground.x = ground.width/2;
   }
  if(keyDown("space")){ 
    trex.velocityY = -14;
   } 
   trex.velocityY = trex.velocityY + 1;
    trex.collide(ground);



  
drawSprites();
}
