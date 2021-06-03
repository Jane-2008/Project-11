var runner, runnerImg;
var path, pathImg;
var leaft_boundary, right_boundary;


function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(350,400);

  //create sprites here
  path = createSprite(175, 200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.sclae = 1.2;

  runner = createSprite(200, 200);
  runner.addAnimation("player", runner_running);
  runner.scale = 0.06;

  left_boundary = createSprite(0, 200, 60, 400);
  left_boundary.visible = false;

  right_boundary = createSprite(350, 200, 60, 400);
  right_boundary.visible = false;

}

function draw() {
  background("black");
  runner.x = World.mouseX;
  runner.collide(left_boundary);
  runner.collide(right_boundary);

  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();

}
