var backgroundimg;
var cat, catsleeping, catrunning, catstanding;
var mouse, mousestanding, mouseteasing, mouserunning;
function preload() {
  backgroundimg = loadImage("images/garden.png");
  catsleeping = loadImage("images/cat1.png");
  catrunning = loadAnimation("images/cat2.png", "images/cat3.png");
  catstanding = loadImage("images/cat4.png");
  mousestanding = loadImage("images/mouse1.png");
  mouseteasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouserunning = loadImage("images/mouse4.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
  cat = createSprite(870, 600);
  cat.addAnimation("cat", catsleeping);
  cat.scale = 0.2;

  mouse = createSprite(200, 600);
  mouse.addAnimation("mouse", mousestanding);
  mouse.scale = 0.1;
}

function draw() {
  background(backgroundimg);

  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0;
    cat.addAnimation("catLastImage", catstanding);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage", mouserunning);
    mouse.scale = 0.15;
    mouse.changeAnimation("mouseLastImage");
  }
  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catrun", catrunning);
    cat.changeAnimation("catrun");
    mouse.addAnimation("teasing", mouseteasing);
    mouse.changeAnimation("teasing");
  }
}
