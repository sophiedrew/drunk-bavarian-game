const game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}

function keyPressed() {
  if (keyCode === 39) {
    game.player.moveRight(10);
  }
  if (keyCode === 37) {
    game.player.moveLeft(10);
  }
}
