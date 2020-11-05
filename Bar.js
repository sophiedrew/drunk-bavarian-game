class Bar {
  constructor() {
    this.x = 37.5;
    this.y = 75;
    this.width = 15;
    this.height = 300;
  }

  draw() {
    image(barImage, this.x, this.y, this.width, this.height);
  }
}
