const RUN_INTERVAL = 10;
const JUMP_INTERVAL = 10;
const RUN_DELTA = 0.15;
const JUMP_DELTA = 0.25;
const JUMP_HEIGHT = 30;

export class Dinosaur {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.createHtmlElement();
    this.createHtml();
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

  run() {
    this.runInternal = setInterval(
      (function (self) {
        return function () {
          self.moveRight();
        }
      })(this),
      RUN_INTERVAL
    );
  }

  moveRight() {
    this.x += RUN_DELTA;
    if (this.x > 130) {
      this.x = 0;
    }
    this.setPostion();
  }

  jump() {
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
    else if ((this.jumpCount >= JUMP_HEIGHT) && (this.jumpCount < 2*JUMP_HEIGHT)) {
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