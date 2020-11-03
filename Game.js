class Game {
  constructor() {
    this.allWaterObstacles = [];
    this.allBeerObstacles = [];
    this.player = new Player();
    this.score = 150;
    this.bar = new Bar();
    this.arrow = new Arrow();
  }

  draw() {
    // BAR //
    this.bar.draw();

    // ARROW//
    this.arrow.draw();

    // PLAYER //
    this.player.draw();

    if (keyIsDown(37)) {
      this.player.moveLeft(5);
    }
    if (keyIsDown(39)) {
      this.player.moveRight(5);
    }
    // BEER OBSTACLES //
    if (frameCount % (60 * Math.floor(random(2, 9))) === 0) {
      this.allBeerObstacles.push(new BeerObstacle()); // 1. creates new beer
    }

    if (frameCount % 8 === 0) {
      this.allBeerObstacles.forEach((obstacle) => {
        obstacle.moveDown(); // 2. beer moves down
      });
    }

    this.allBeerObstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // 3. everytime the obstacle goes off canvas, remove it from the array
      if (obstacle.y >= HEIGHT) {
        this.allBeerObstacles.splice(index, 1);
      }
      // COLLISION CHECK BEER + PLAYER
      if (this.collisionCheckPlayer(this.player, obstacle)) {
        this.score += 1;
        console.log(this.score);
        this.allBeerObstacles.splice(index, 1);
        this.arrow.moveUp(10);
      }
    });

    // WATER OBSTACLES //
    if (frameCount % (60 * Math.floor(random(2, 9))) === 0) {
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

      // COLLISION CHECK WATER + PLAYER
      if (this.collisionCheckPlayer(this.player, obstacle)) {
        this.score -= 1;
        console.log(this.score);
        this.allWaterObstacles.splice(index, 1);
        this.arrow.moveDown(10);
      }
    }); // end of loop water
  } // End of draw function

  checkIfWaterIntersectsBeer(water, beer) {
    if (
      water.y <= beer.y + beer.height &&
      water.y + water.height >= beer.y &&
      water.y + water.width >= beer.x &&
      water.x <= beer.x + beer.width
    ) {
      return true;
    }
    return false;
  }

  collisionCheckPlayer(player, obstacle) {
    if (
      player.y <= obstacle.y + obstacle.height &&
      player.y + player.height >= obstacle.y &&
      player.x + player.width >= obstacle.x &&
      player.x <= obstacle.x + obstacle.width
    ) {
      return true;
    }
    return false;
  }
} // End of class
