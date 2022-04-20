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
    this.dinoImg.style.top = this.y*10 + 'px';
    this.dinoImg.style.left = this.x*10 + 'px';
  }

  run() {
    this.runInternal = setInterval(
      (function (self) {
        return function () {
          self.moveRight();
        }
      })(this),
      10
    );
  }

  moveRight() {
    this.x += 0.15;
    if (this.x > 130){
      this.x = 0;
    }
    this.setPostion();
  }


}