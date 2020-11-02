class BeerObstacle {
  constructor() {
    this.x = random(width - 50, 50);
    this.y = -10; // starts above the canvas
    this.width = 30;
    this.height = 50;
  }

  moveDown() {
    this.y += 10;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
