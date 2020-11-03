class WaterObstacle {
  constructor() {
    this.x = random(width - 50, 50);
    this.y = -1; // starts above the canvas
    this.width = 50;
    this.height = 30;
  }

  moveDown() {
    this.y += 5;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
