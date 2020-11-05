class WaterObstacle {
  constructor() {
    this.x = random(width - 150, 150);
    this.y = -1; // starts above the canvas
    this.width = 30;
    this.height = 50;
  }

  moveDown() {
    this.y += 5;
  }

  draw() {
    image(waterImage, this.x, this.y, this.width, this.height);
  }
}
