var astronaut;
var bg;
var bath, brush, drink, eat, gym, moving, gym2;
var topEdge, bottomEdge, rightEdge, leftEdge;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  moving = loadAnimation("move1.png","move2.png");
}

function setup() {
 createCanvas(400,400);
astronaut = createSprite(200,230);
astronaut.addAnimation("sleeping", sleep);
astronaut.scale = 0.1;
//astronaut.debug = true;
astronaut.setCollider("rectangle",0,0,1100,2350)

topEdge = createSprite(200,0,400,1);
topEdge.shapeColor = "red"
bottomEdge = createSprite(200,400,400,1);
bottomEdge.shapeColor = "green"
leftEdge = createSprite(0,200,1,400);
leftEdge.shapeColor = "white"
rightEdge = createSprite(400,200,1,400);
rightEdge.shapeColor = "black"
}

function draw() {
background(bg);

astronaut.bounceOff(topEdge);
astronaut.bounceOff(bottomEdge);
astronaut.bounceOff(leftEdge);
astronaut.bounceOff(rightEdge);

clicks();
drawSprites();

fill("white")
text("Instructions:", 20,15);
text("Up￪ for gymming style 1 ", 20,30);
text("Down￬ for brushing ", 20,45);
text("Right￫ for eating", 20,60);
text("Left￩ for bathing", 20,75);
text("D key for drinking", 20,90);
text("M key for moving", 20,105);
text("G key for gymming style 2 ", 20,120);
}

function clicks(){

  if(keyDown("right")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }else if(keyDown("left")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }else if(keyDown("up")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }else if(keyDown("down")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }else if(keyDown("d")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }else if(keyDown("m")){
    astronaut.addAnimation("moving", moving);
    astronaut.changeAnimation("moving",moving);
    astronaut.velocityX = Math.round(random(-2,2));
    astronaut.velocityY = Math.round(random(-2,2));
  }else if(keyDown("g")){
    astronaut.addAnimation("gymming2", gym2);
    astronaut.changeAnimation("gymming2");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

}