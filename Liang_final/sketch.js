let cursorImg;

function preload() {
  cursorImg = loadImage('images/mouse.png');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('p5-container');
  clear();
  noCursor();
}

function draw() {
  clear();
  if (cursorImg) {
    image(cursorImg, mouseX, mouseY, 60, 60);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
