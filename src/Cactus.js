const MOVE_INTERVAL = 10;


export class Cactus {
  constructor(horizantal_ratio, x, delete_callback) {
    this.x = x;
    this.y = 0;
    this.delete_callback = delete_callback;
    this.horizantal_ratio = horizantal_ratio
    this.createHtmlElement();
    this.createHtml();

    this.move();
  }

  createHtmlElement() {
    let cactusImg = document.createElement('img');
    cactusImg.src = './assets/img/cac1.png';
    cactusImg.id = 'cactusImg';
    this.cactusImg = cactusImg;
  }

  createHtml() {
    let playground = document.getElementById('playground');
    this.setPostion();
    playground.appendChild(this.cactusImg);
  }

  setPostion() {
    this.cactusImg.style.top = this.y * 10 + 'px';
    this.cactusImg.style.left = (this.x * this.horizantal_ratio - 59) + 'px';
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
    playground.removeChild(this.cactusImg);
    delete this;
  }
}