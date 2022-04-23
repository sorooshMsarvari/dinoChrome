import { Dinosaur } from './Dinosaur.js';
import { ObstacleManager } from './ObstacleManager.js';
import { Playground } from './Playground.js';

const PLAYGROUND_SIZE_PERCENT = 0.8;
export const PLAYGROUND_BEGGING = 0;
export const PLAYGROUND_END = 1000;
export const OBSTACLE_GENERATION_RATE = 2000;
const GAME_RATE = 5;

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.obstacleManager = new ObstacleManager(this.horizantalRatio);
    this.loadDinosaur();
    this.obstacleManager.startMakingObstacle();
    this.startGameLoop();

    document.body.onkeydown = (function (self) {
      return function (e) {
        self.handleKeyPress(e);
      }
    })(this)
  }

  createPlayground() {
    new Playground(PLAYGROUND_SIZE_PERCENT);
    this.horizantalRatio = window.screen.width * PLAYGROUND_SIZE_PERCENT / 1000;
  }

  loadDinosaur() {
    this.dinosaur = new Dinosaur(this.horizantalRatio);
  }

  startGameLoop() {
    this.gameLoop = setInterval(
      (function (self) {
        return function () {
          self.updateGame();
        }
      })(this),
      GAME_RATE
    );
  }

  updateGame() {
    this.obstacleManager.updateObstacles();
    const collision = this.obstacleManager.hasObstacleCollideWithDino(this.dinosaur.hitbox);
    if(collision) {
      this.freeze();
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === 32) {
      this.dinosaur.jump();
    }

  }

  freeze() {
    clearInterval(this.gameLoop);
    clearInterval(this.obstacleManager.obstacleGenerationInterval);
    clearInterval(this.dinosaur.jumpInterval);
    this.disableKeyPress();
  }

  disableKeyPress() {
    document.body.onkeydown = null;

  }
}