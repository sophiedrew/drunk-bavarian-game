class Arrow {
  constructor() {
    this.x = 30;
    this.y = 150;
    this.width = 10;
    this.height = 10;
  }

  moveUp(steps) {
    if (this.y <= 50) {
      return;
    }
    this.y -= steps;
  }

  moveDown(steps) {
    if (this.y >= 250 - this.height / 2) {
      return;
    }
    this.y += steps;
  }

  draw() {
    image(arrowImage, this.x, this.y, this.width, this.height);
  }
}
