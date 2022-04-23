const MOVE_INTERVAL = 5;
import {Hitbox} from './Hitbox.js';

export class Cactus {
  constructor(horizantalRatio, x, deleteCallback) {
    this.deleteCallback = deleteCallback;

    let cactusImg = this.createImg();
    this.hitbox = new Hitbox(cactusImg, 5, 10, x, 0, horizantalRatio);

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
      this.deleteCallback();
    }
    this.hitbox.render();
  }

  remove() {
    this.hitbox.remove();
    delete this;
  }
}