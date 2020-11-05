class Arrow {
  constructor() {
    this.x = 25;
    this.y = 145;
    this.width = 20;
    this.height = 8;
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
    rect(this.x, this.y, this.width, this.height);
  }
}
