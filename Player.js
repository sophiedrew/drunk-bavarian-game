class Player {
  constructor() {
    this.x = 210;
    this.y = 150;
    this.width = 80;
    this.height = 100;
  }

  moveLeft(steps) {
    if (this.x <= 150) {
      return;
    }
    this.x -= steps;
  }

  moveRight(steps) {
    if (this.x >= WIDTH - this.width - 150) {
      return;
    }
    this.x += steps;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
