const MOVE_INTERVAL = 5;
import {Hitbox} from './Hitbox.js';

export class Cactus {
  constructor(horizantal_ratio, x, delete_callback) {
    this.delete_callback = delete_callback;
    this.horizantal_ratio = horizantal_ratio;

    let cactusImg = this.createImg();
    this.hitbox = new Hitbox(cactusImg, 5, 10, x, 0, horizantal_ratio);

    this.move();
  }

  createImg() {
    let cactusImg = document.createElement('img');
    cactusImg.src = './assets/img/cac1.png';
    cactusImg.id = 'cactusImg';
    return cactusImg;
  }

  move() {
    this.moveInterval = setInterval(
      (function (self) {
        return function () {
          self.moveLeft();
        }
      })(this),
      MOVE_INTERVAL
    );
  }

  moveLeft() {
    this.hitbox.moveLeft(1);
    if (this.hitbox.reachedLeftEnd()){
      clearInterval(this.moveInterval);
      this.delete_callback();
    }
    this.hitbox.render();
  }

  remove() {
    this.hitbox.remove();
    delete this;
  }
}