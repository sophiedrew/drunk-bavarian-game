function preload() {
  barImage = loadImage("./Bar_promille-level.001.png");
  arrowImage = loadImage("./arrow_promille-level.001.png");
}

const game = new Game();
let gameStart = false;
let gameOver = false;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}

function keyPressed() {
  if (gameStart === false && keyCode === 13) {
    gameStart = true;
  }

  if (gameOver === true && gameStart === false && keyCode === 13) {
    gameStart = true;
  }

  if (keyCode === 13) {
    document.location.reload();
  }
}
