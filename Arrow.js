class Arrow {
  constructor() {
    this.x = 30;
    this.y = 217.5;
    this.width = 30;
    this.height = 12;
  }

  moveUp(steps) {
    if (this.y <= 75) {
      return;
    }
    this.y -= steps;
  }

  moveDown(steps) {
    if (this.y >= 375 - this.height / 2) {
      return;
    }
    this.y += steps;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
