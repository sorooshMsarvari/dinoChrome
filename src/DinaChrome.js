import { Dinosaur } from './Dinosaur.js';
import { Cactus } from './Cactus.js';
import { Playground } from './Playground.js';

const PLAYGROUND_SIZE_PERCENT = 0.8;
export const PLAYGROUND_BEGGING = 0;
export const PLAYGROUND_END = 1000;

export class DinaChrome {
  constructor() {
    this.obstacle_array = [];
  }
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
    this.make_new_cactus();
    this.obstacle_generation_interval = setInterval(
      (function (self) {
        return function () {
          self.make_new_cactus();
        }
      })(this),
      4000
    );
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

  make_new_cactus() {
    this.obstacle_array.push(new Cactus(
      this.horizantal_ratio,
      PLAYGROUND_END,
      (function (self) {
        return function () {
          self.delete_cactus();
        }
      })(this)
    ));
  }

  handleKeyPress(e) {
    if (e.keyCode === 32) {
      this.dinosaur.jump();
    }

  }

  delete_cactus() {
    let cactus = this.obstacle_array.shift();
    cactus.remove();
  }
}