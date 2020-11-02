class Game {
  constructor() {
    this.allWaterObstacles = [];
    this.allBeerObstacles = [];
    this.player = new Player();
  }

  draw() {
    this.player.draw();

    if (keyIsDown(37)) {
      this.player.moveLeft(5);
    }
    if (keyIsDown(39)) {
      this.player.moveRight(5);
    }
    // BEER OBSTACLES //
    if (frameCount % (60 * 5) === 0) {
      this.allBeerObstacles.push(new BeerObstacle()); // 1. creates new beer
    }

    if (frameCount % 8 === 0) {
      this.allBeerObstacles.forEach((obstacle) => {
        obstacle.moveDown(); // 2. beer bewegt sich runter
      });
    }

    this.allBeerObstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // 3. everytime the obstacle goes off canvas, remove it from the array
      if (obstacle.y >= HEIGHT) {
        this.allBeerObstacles.splice(index, 1);
      }
    });

    // WATER OBSTACLES //
    if (frameCount % (60 * 5) === 0) {
      this.allWaterObstacles.push(new WaterObstacle()); // 1. creates new water
    }

    if (frameCount % 5 === 0) {
      this.allWaterObstacles.forEach((obstacle) => {
        obstacle.moveDown(); // 2. Water moves down
      });
    }

    this.allWaterObstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // 3. everytime the obstacle goes off canvas, remove it from the array
      if (obstacle.y >= HEIGHT) {
        this.allWaterObstacles.splice(index, 1);
      }
    });
  }
}
