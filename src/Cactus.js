const MOVE_INTERVAL = 5;
import {Hitbox} from './Hitbox.js'

export class Cactus {
  constructor(horizantal_ratio, x, delete_callback) {
    this.x = x;
    this.y = 0;
    this.delete_callback = delete_callback;
    this.horizantal_ratio = horizantal_ratio;
    let cactusImg = this.createImg();
    this.hitbox = new Hitbox(cactusImg, 10, 20);
    this.div = this.hitbox.createHtmlElement();
    
    this.addToPlayground();

    this.move();
  }

  createImg() {
    let cactusImg = document.createElement('img');
    cactusImg.src = './assets/img/cac1.png';
    cactusImg.id = 'cactusImg';
    return cactusImg;
  }

  addToPlayground() {
    let playground = document.getElementById('playground');
    this.setPostion();
    playground.appendChild(this.div);
  }

  setPostion() {
    this.div.style.top = this.y * 10 + 'px';
    this.div.style.left = (this.x * this.horizantal_ratio) + 'px';
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
    this.x -= 1;
    if (this.x <= 0){
      clearInterval(this.moveInterval);
      this.delete_callback();
    }
    this.setPostion();
  }

  remove() {
    let playground = document.getElementById('playground');
    playground.removeChild(this.div);
    delete this;
  }
}