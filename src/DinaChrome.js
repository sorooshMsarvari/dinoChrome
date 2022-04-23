import { Dinosaur } from './Dinosaur.js';
import { ObstacleManager } from './ObstacleManager.js';
import { Playground } from './Playground.js';

const PLAYGROUND_SIZE_PERCENT = 0.8;
export const PLAYGROUND_BEGGING = 0;
export const PLAYGROUND_END = 1000;
export const OBSTACLE_GENERATION_RATE = 2000

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.obstacleManager = new ObstacleManager(this.horizantalRatio);
    this.loadDinosaur();
    this.obstacleManager.startMakingObstacle();

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

  updateGame() {
    this.obstacleManager.updateObstacles();
  }

  handleKeyPress(e) {
    if (e.keyCode === 32) {
      this.dinosaur.jump();
    }

  }
}