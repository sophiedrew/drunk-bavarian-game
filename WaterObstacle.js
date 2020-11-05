class WaterObstacle {
  constructor() {
    this.x = random(width - 225, 225);
    this.y = -2; // starts above the canvas
    this.width = 45;
    this.height = 75;
  }

  moveDown() {
    this.y += 7.5;
  }

  draw() {
    image(waterImage, this.x, this.y, this.width, this.height);
  }
}
