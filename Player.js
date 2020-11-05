class Player {
  constructor() {
    this.x = 315;
    this.y = 180;
    this.width = 150;
    this.height = 350;
  }

  moveLeft(steps) {
    if (this.x <= 180) {
      return;
    }
    this.x -= steps;
  }

  moveRight(steps) {
    if (this.x >= WIDTH - this.width - 120) {
      return;
    }
    this.x += steps;
  }

  draw() {
    image(playerImage, this.x, this.y, this.width, this.height);
  }
}
