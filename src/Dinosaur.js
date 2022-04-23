const RUN_INTERVAL = 10;
const JUMP_INTERVAL = 5;
const RUN_DELTA = 0.15;
const JUMP_DELTA = 0.2;
const JUMP_HEIGHT = 90;

import {Hitbox} from './Hitbox.js'


export class Dinosaur {
  constructor(horizantal_ratio) {
    this.x = 0;
    this.y = 0;
    this.horizantal_ratio = horizantal_ratio;
    this.jumpInterval = null;

    let dinoImg = this.createImg();
    this.hitbox = new Hitbox(dinoImg, 10, 10, 0, 0, horizantal_ratio);

  }

  createImg() {
    let dinoImg = document.createElement('img');
    dinoImg.src = './assets/img/dinosaur.png';
    dinoImg.id = 'dinoImg';
    return dinoImg;
  }

  jump() {
    if (this.jumpInterval !== null)
      return;
    this.jumpCount = 0;
    this.jumpInterval = setInterval(
      (function (self) {
        return function () {
          self.makeJump();
        }
      })(this),
      JUMP_INTERVAL
    );
  }

  makeJump() {
    this.jumpCount++;
    if (this.jumpCount < JUMP_HEIGHT) {
      this.hitbox.moveUp(JUMP_DELTA);
    }
    else if ((this.jumpCount >= JUMP_HEIGHT) && (this.jumpCount < 2 * JUMP_HEIGHT)) {
      this.hitbox.moveDown(JUMP_DELTA);
    }
    else {
      this.hitbox.zeroVertical();
      clearInterval(this.jumpInterval);
      this.jumpInterval = null;
      this.jumpCount = 0;
    }
    this.hitbox.render();
  }


}