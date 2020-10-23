var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}









/*var fixedRect, moveRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  moveRect = createSprite(400, 200, 80, 30);
  moveRect.shapeColor = "green";
  moveRect.debug = true;
  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor = "green";
  gameobj2 = createSprite(200,100,50,50);
  gameobj2.shapeColor = "green";

}

function draw() {
  background(0,0,0); 
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY; 
  
  console.log(moveRect.x - fixedRect.x)
  if(isTouching(moveRect, gameobj1)){
    moveRect.shapeColor = "red";
    gameobj1.shapeColor = "red";
  }
  else{
    moveRect.shapeColor = "green";
    gameobj1.shapeColor = "green";
  }
  drawSprites();
}

}*/