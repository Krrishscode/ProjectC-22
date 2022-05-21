var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOverImg, gameOverx;
var boy2Img, boy2, boy3Img, boy3, x;

//Game States
var PLAY = 1;
var END = 2;
var play2 = 3;
var play3 =11;
var play4 = 10;
var end2 = 4;
var home = 5;
var home2 = 6;
var home3 = 12;
var home4 = 13;
var home5 = 14;
var home6 = 15;
var start = 7;
var lvop = 8;
var lvop2 = 9;
var gameState=7;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
 //write a code to load the image named gameOver.png

 gameOverImg = loadImage("gameOver.png")
 boy2Img = loadImage("man.png")
 boy3Img = loadImage("Runner-1.png")


 
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
// Moving background
  
path=createSprite(width / 2,height / 2);
path.addImage(pathImg);




//creating boy running
boy = createSprite(width / 2,height / 1.1,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

boy2 = createSprite(boy.position.x, boy.position.y);
boy2.addImage(boy2Img);
boy2.scale=0.08;

boy3 = createSprite(width / 2, height / 1.1)
boy3.addImage(boy3Img)
boy3.scale = 0.08;

gameOverx = createSprite(width/2 , height/ 2)
gameOverx.addImage(gameOverImg)

  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

// x = createSprite(width / 2 ,height / 2, 1535, 10)
// x.shapeColor = "red"

}

function draw() {

  if (gameState === start) {

    path.velocityY = 0;

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = false;
    gameOverx.visible = false;

    if (keyDown("x")) {

      gameState = home

    }

    if (keyDown("y")) {

      gameState = home2

    }

    drawSprites();

    textSize(30)
    stroke("black")
    strokeWeight(5)
    fill("white")
    text("Press x for mouse control \nPress y for keyboard controls", width/ 2.5, height / 2)

  }

  if (gameState === home) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("1")) {
      gameState = home3
    }

    if (keyDown("2")) {
      gameState = home4
    }
    

    drawSprites();
    textSize(30)
    stroke("black")
    strokeWeight(5)
    fill("white")
    text("Press 1 for level 1 \nPress 2 for level 2", width/ 2.5, height / 2)

  }

  if (gameState === home2) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("1")) {
      gameState = home5
    }

    if (keyDown("2")) {
      gameState = home6
    }

    drawSprites();
    textSize(30)
    stroke("black")
    strokeWeight(5)
    fill("white")
    text("Press 1 for level 1 \nPress 2 for level 2", width/ 2.5, height / 2)

  }

  if (gameState === home3) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("space")) {

      gameState = PLAY;

    }

    drawSprites();
    textSize(60)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Press Space to start", width / 3, height / 2)
  }
  
  if (gameState === home4) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("space")) {

      gameState = play3;

    }


    drawSprites();
    textSize(60)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Press Space to start", width / 3, height / 2)
  }

  if (gameState === home5) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("space")) {
      gameState = play2;
    }

    drawSprites();
    textSize(60)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Press Space to start", width / 3, height / 2)
  }

  if (gameState === home6) {

    path.visible = true;
    boy.visible = false;
    boy2.visible = false;
    boy3.visible = true;
    gameOverx.visible = false;

    if (keyDown("space")) {
      gameState = play4;
    }


    drawSprites();
    textSize(60)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Press Space to start", width / 3, height / 2)
  }

  if(gameState==PLAY){
  background(0);

  if (keyDown("shift")) {

    gameState = start;
    treasureCollection = 0;

   

    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
        
    cashG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);


  }

  boy3.visible = false;

  path.velocityY = path.velocityY = (4 + treasureCollection / 250 * 2);

  boy.visible = true;

  boy2.visible = false;
  gameOverx.visible = false;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if (path.y > height){

    path.y = height/2;
  
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
       
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);

   
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);

    textSize(20)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Level: 1", 1450, 30)

    textSize(14)
    stroke("black")
    strokeWeight(1.5)
    fill("white")
    text("Press shift for back", 12, 50)
  }

  if (gameState === play2) {

    background(0);

    if (keyDown("shift")) {

      gameState = start;
      treasureCollection = 0;
  
     
  
      cashG.destroyEach();
      diamondsG.destroyEach();
      jwelleryG.destroyEach();
      swordGroup.destroyEach();
          
      cashG.setVelocityYEach(0);
      diamondsG.setVelocityYEach(0);
      jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
    
    }

    boy3.visible = false;

    path.velocityY = (4 + treasureCollection / 250 * 2);
  
    boy.visible = true;
  
    boy2.visible = false;
    gameOverx.visible = false;
    
    if (keyDown("right_Arrow")) {

      boy.x += 80

    }

    if (keyDown("left_Arrow")) {

      boy.x -= 80

    }
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //code to reset the background
    if (path.y > height){
  
      path.y = height/2;
    
    }
    
      createCash();
      createDiamonds();
      createJwellery();
      createSword();
  
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;
      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
        treasureCollection=treasureCollection+100;
        
      }else if(jwelleryG.isTouching(boy)) {
        jwelleryG.destroyEach();
        treasureCollection= treasureCollection + 150;
        
      }else{
        if(swordGroup.isTouching(boy)) {
          gameState=end2;
         
          
          cashG.destroyEach();
          diamondsG.destroyEach();
          jwelleryG.destroyEach();
          swordGroup.destroyEach();
          
          cashG.setVelocityYEach(0);
          diamondsG.setVelocityYEach(0);
          jwelleryG.setVelocityYEach(0);
          swordGroup.setVelocityYEach(0);
  
     
       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,10,30);

    textSize(20)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Level: 1", 1450, 30)

    textSize(14)
    stroke("black")
    strokeWeight(1.5)
    fill("white")
    text("Press shift for back", 12, 50)

  }
  if(gameState==play3){
  background(0);

  if (keyDown("shift")) {

    gameState = start;
    treasureCollection = 0;

   

    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
        
    cashG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);


  }

  boy3.visible = false;

  path.velocityY = path.velocityY = (6 + treasureCollection / 250 * 3);

  boy.visible = true;

  boy2.visible = false;
  gameOverx.visible = false;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if (path.y > height){

    path.y = height/2;
  
  }
  
    createCash2();
    createDiamonds2();
    createJwellery2();
    createSword2();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
       
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);

   
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);

  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("white")
  text("Level: 2", 1450, 30)

  textSize(14)
  stroke("black")
  strokeWeight(1.5)
  fill("white")
  text("Press shift for back", 12, 50)
  }

  if (gameState === play4) {

    background(0);

    if (keyDown("shift")) {

      gameState = start;
      treasureCollection = 0;
  
     
  
      cashG.destroyEach();
      diamondsG.destroyEach();
      jwelleryG.destroyEach();
      swordGroup.destroyEach();
          
      cashG.setVelocityYEach(0);
      diamondsG.setVelocityYEach(0);
      jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
    
    }

    boy3.visible = false;

    path.velocityY = (6 + treasureCollection / 250 * 3);
  
    boy.visible = true;
  
    boy2.visible = false;
    gameOverx.visible = false;
    
    if (keyDown("right_Arrow")) {

      boy.x += 80

    }

    if (keyDown("left_Arrow")) {

      boy.x -= 80

    }
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //code to reset the background
    if (path.y > height){
  
      path.y = height/2;
    
    }
    
      createCash2();
      createDiamonds2();
      createJwellery2();
      createSword2();
  
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;
      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
        treasureCollection=treasureCollection+100;
        
      }else if(jwelleryG.isTouching(boy)) {
        jwelleryG.destroyEach();
        treasureCollection= treasureCollection + 150;
        
      }else{
        if(swordGroup.isTouching(boy)) {
          gameState=end2;
         
          
          cashG.destroyEach();
          diamondsG.destroyEach();
          jwelleryG.destroyEach();
          swordGroup.destroyEach();
          
          cashG.setVelocityYEach(0);
          diamondsG.setVelocityYEach(0);
          jwelleryG.setVelocityYEach(0);
          swordGroup.setVelocityYEach(0);
  
     
       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,10,30);

    textSize(20)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("Level: 2", 1450, 30)

    textSize(14)
    stroke("black")
    strokeWeight(1.5)
    fill("white")
    text("Press shift for back", 12, 50)

  }

  if (gameState == END) {
    gameOverx.visible = true;

    boy3.visible = false;

    boy2.visible = true;
    boy.visible = false;

    if (keyDown("space")) {

      gameState = start;

    }

    path.velocityY = 0;
    
    treasureCollection = 0;

    drawSprites();

    textSize(20)
    stroke("black")
    strokeWeight(4)
    fill("white")
    text("Press space key for restart", width / 2.3 , height/ 1.7)

  }

  if (gameState === end2) {
    gameOverx.visible = true;

    boy3.visible = false;

    boy2.visible = true;
    boy.visible = false;

    if (keyDown("space")) {

      gameState = start;

    }

    path.velocityY = 0;
    
    treasureCollection = 0;

    drawSprites();

    textSize(20)
    stroke("black")
    strokeWeight(4)
    fill("white")
    text("Press space key for restart", width / 2.3 , height/ 1.7)

  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 1485),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = (3 + treasureCollection / 300 * 2);
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 1485),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = (3 + treasureCollection / 300 * 2);
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 1485),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = (3 + treasureCollection / 300 * 2);
  jwellery.lifetime = 250;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 1485),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = (3 + treasureCollection / 300 * 2);
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}

function createCash2() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 1485),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = (5 + treasureCollection / 300 * 3);
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

function createDiamonds2() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 1485),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = (5 + treasureCollection / 300 * 3);
  diamonds.lifetime = 250;
  diamondsG.add(diamonds);
}
}

function createJwellery2() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 1485),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = (5 + treasureCollection / 300 * 3);
  jwellery.lifetime = 250;
  jwelleryG.add(jwellery);
  }
}

function createSword2(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 1485),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = (5 + treasureCollection / 300 * 3);
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}