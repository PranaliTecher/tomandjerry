
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse1.png","images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870, 600);
     cat.addAnimation("catimage1",catImg1);
     cat.scale = 0.2;
     //cat.velocityX = -3;



     mouse = createSprite(200, 600);
     mouse.addAnimation("mouseimage1",mouseImg1);
     mouse.scale = 0.15;
     //mouse.debug = true;
     

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catRunning",catImg3);
       cat.x=300;
       cat.scale=0.2;
       cat.changeAnimation("catRunning");
       mouse.addAnimation("mouseimage4",mouseImg3);
       mouse.scale=0.15;
       mouse.changeAnimation("mouseimage4")
       

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catrun",catImg2);
     cat.changeAnimation("catrun");
   
 
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
  }
 
}
