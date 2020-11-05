class BeerObstacle {
  constructor() {
    this.x = random(width - 225, 225);
    this.y = -2; // starts above the canvas
    this.width = 60;
    this.height = 75;
  }

  moveDown() {
    this.y += 15;
  }

  draw() {
    image(beerImage, this.x, this.y, this.width, this.height);
  }
}
