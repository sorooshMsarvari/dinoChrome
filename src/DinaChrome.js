import { Dinosaur } from './Dinosaur.js';
import { Cactus } from './Cactus.js';
import { Playground } from './Playground.js';

const PLAYGROUND_SIZE_PERCENT = 0.8;
export const PLAYGROUND_BEGGING = 0;
export const PLAYGROUND_END = 1000;

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
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
    this.cactus = new Cactus(this.horizantal_ratio, PLAYGROUND_END);
  }

  handleKeyPress(e) {
    if(e.keyCode === 32){
      this.dinosaur.jump();
    }
    
  }
}