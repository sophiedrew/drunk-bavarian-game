class Bar {
  constructor() {
    this.x = 30;
    this.y = 50;
    this.width = 10;
    this.height = 200;
  }

  draw() {
    image(barImage, this.x, this.y, this.width, this.height);
  }
}
