function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(100,300,40,20);
  rect3 = createSprite(50,50,40,40);
  rect4 = createSprite(50,350,40,40);
  rect3.velocityY = 7;
  rect3.shapeColor = "pink";
  rect4.velocityY = -3;
  rect4.shapeColor = "orange";
}

function draw() {
  background(0);
  rect2.x = mouseX;
  rect2.y = mouseY;
  rectMode(CENTER);
  rect(200,200,50,50);
  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2&&
     rect2.x-rect1.x < rect1.width/2+rect2.width/2&&
     rect1.y-rect2.y< rect1.height/2+rect2.height/2&&
     rect2.y-rect1.y < rect1.height/2+rect2.height/2){
       rect1.shapeColor = "red";
       rect2.shapeColor = "green";
     }
  else{
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }

if (rect3.x-rect4.x<rect3.width/2+rect4.width/2&&
    rect4.x-rect3.x<rect3.width/2+rect4.width/2){
      rect3.velocityX = rect3.velocityX*(-1);
      rect4.velocityX = rect4.velocityX*(-1);
    }

    if(rect3.y-rect4.y<rect3.height/2+rect4.height/2&&
      rect4.y-rect3.y<rect3.height/2+rect4.height/2){
       // rect3.velocityY = rect3.velocityY*(-1);
       // rect4.velocityY = rect4.velocityY*(-1);
      var r=rect3.velocityY;
       rect3.velocityY = rect4.velocityY;
       rect4.velocityY = r;
       
      }

  drawSprites();
}