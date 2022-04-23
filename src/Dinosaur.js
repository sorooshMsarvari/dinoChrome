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

    this.startUp();

  }
  
  startUp() {
    let dinoImg = this.createImg();
    this.hitbox = new Hitbox(dinoImg, 10, 10);
    this.htmlElement = this.hitbox.createHtmlElement();
    this.addToPlayground();
    this.jumpInterval = null;
  }

  createImg() {
    let dinoImg = document.createElement('img');
    dinoImg.src = './assets/img/dinosaur.png';
    dinoImg.id = 'dinoImg';
    return dinoImg;
  }

  addToPlayground() {
    let playground = document.getElementById('playground');
    this.setPostion();
    playground.appendChild(this.htmlElement);
  }

  setPostion() {
    this.htmlElement.style.top = this.y * 10 + 'px';
    this.htmlElement.style.left = this.x * 10 + 'px';
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
      this.y -= JUMP_DELTA;
    }
    else if ((this.jumpCount >= JUMP_HEIGHT) && (this.jumpCount < 2 * JUMP_HEIGHT)) {
      this.y += JUMP_DELTA;
    }
    else {
      this.y = 0;
      clearInterval(this.jumpInterval);
      this.jumpInterval = null;
      this.jumpCount = 0;
    }
    this.setPostion();
  }


}