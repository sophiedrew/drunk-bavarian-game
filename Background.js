class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 300;
  }

  draw() {
    image(bgImage, this.x, this.y, this.width, this.height);
  }
}
