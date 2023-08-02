var man;
var manAnimation;
var background2;
var background2Image;

function preload() {
  manAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
  background2Image = loadImage("path.png")
}

function setup() {
  createCanvas(260, 400);
  background2 = createSprite(130, 200);
  background2.addImage(background2Image);
  background2.height = 600
  background2.y = background2.height / 2
  man = createSprite(130, 350, 10, 10);
  man.addAnimation("running", manAnimation);
  man.scale = 0.06;
}
function draw() {
  background("red");
  man.x = World.mouseX;
  background2.velocityY = 2;
  if (background2.y > 425) {
    background2.y = background2.height / 2;
  }
  drawSprites();
}
