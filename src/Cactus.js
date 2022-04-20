export class Cactus {
  constructor(horizantal_ratio, x) {
    this.x = x;
    this.y = 0;
    this.horizantal_ratio = horizantal_ratio
    this.createHtmlElement();
    this.createHtml();
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
    this.cactusImg.style.left = this.x * 10 + 'px';
  }
}