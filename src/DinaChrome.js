import { Dinosaur } from './Dinosaur.js';
import { ObstacleManager } from './ObstacleManager.js';
import { Playground } from './Playground.js';

const PLAYGROUND_SIZE_PERCENT = 0.8;
export const PLAYGROUND_BEGGING = 0;
export const PLAYGROUND_END = 1000;
export const OBSTACLE_GENERATION_RATE = 2000

export class DinaChrome {
  constructor() {
  }
  startGame() {
    this.createPlayground();
    this.obstacle_manager = new ObstacleManager(this.horizantal_ratio);
    this.loadDinosaur();
    this.obstacle_manager.startMakingObstacle();
    
    document.body.onkeydown = (function (self) {
      return function (e) {
        self.handleKeyPress(e);
      }
    })(this)
  }

  createPlayground() {
    new Playground(PLAYGROUND_SIZE_PERCENT);
    this.horizantal_ratio = window.screen.width * PLAYGROUND_SIZE_PERCENT / 1000;
  }

  loadDinosaur() {
    this.dinosaur = new Dinosaur(this.horizantal_ratio);
  }

  handleKeyPress(e) {
    if (e.keyCode === 32) {
      this.dinosaur.jump();
    }

  }
}