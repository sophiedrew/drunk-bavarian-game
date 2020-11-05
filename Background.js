class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 750;
    this.height = 450;
  }

  draw() {
    image(bgImage, this.x, this.y, this.width, this.height);
  }
}
