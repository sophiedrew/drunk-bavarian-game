class Player {
  constructor() {
    this.x = 210;
    this.y = 185;
    this.width = 100;
    this.height = 166;
  }

  moveLeft(steps) {
    if (this.x <= 120) {
      return;
    }
    this.x -= steps;
  }

  moveRight(steps) {
    if (this.x >= WIDTH - this.width - 80) {
      return;
    }
    this.x += steps;
  }

  draw() {
    image(playerImage, this.x, this.y, this.width, this.height);
  }
}
