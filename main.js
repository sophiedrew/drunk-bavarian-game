const game = new Game();
let gameStart = false;
let gameOver = false;

function preload() {
  bgImage = loadImage("./Screens/background.png");
  barImage = loadImage("./images/Bar_promille-level.001.png");
  playerImage = loadImage("./images/PlayerWithHand.png");
  waterImage = loadImage("./images/WaterGlass.png");
  beerImage = loadImage("./images/BeerGlass.png");
  game.preload();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  clear();
  background("black");
  game.draw();
}

function keyPressed() {
  if (gameStart === false && keyCode === 32) {
    gameStart = true;
  }

  if (keyCode === 13) {
    document.location.reload();
  }
}
