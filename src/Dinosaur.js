const RUN_INTERVAL = 10;
const JUMP_INTERVAL = 5;
const RUN_DELTA = 0.15;
const JUMP_DELTA = 0.2;
const JUMP_HEIGHT = 50;

export class Dinosaur {
  constructor(horizantal_ratio) {
    this.x = 0;
    this.y = 0;
    this.horizantal_ratio = horizantal_ratio;
    this.createHtmlElement();
    this.createHtml();
    this.jumpInterval = null;
  }

  createHtmlElement() {
    let dinoImg = document.createElement('img');
    dinoImg.src = './assets/img/dinosaur.png';
    dinoImg.id = 'dinoImg';
    this.dinoImg = dinoImg;
  }

  createHtml() {
    let playground = document.getElementById('playground');
    this.setPostion();
    playground.appendChild(this.dinoImg);
  }

  setPostion() {
    this.dinoImg.style.top = this.y * 10 + 'px';
    this.dinoImg.style.left = this.x * 10 + 'px';
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