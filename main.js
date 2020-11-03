const game = new Game();
let gameStart = false;
let gameOver = false;

function preload() {
  barImage = loadImage("./images/Bar_promille-level.001.png");
  arrowImage = loadImage("./images/arrowImage.png");
  game.preload();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}

function keyPressed() {
  if (gameStart === false && keyCode === 32) {
    gameStart = true;
  }

  if (gameOver === true && gameStart === false && keyCode === 13) {
    gameStart = true;
  }

  if (keyCode === 13) {
    document.location.reload();
  }
}
