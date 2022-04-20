export class Dinosaur {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.loadHtml();
  }

  loadHtml() {
    let playground = document.getElementById('playground');
    let dinaImg = document.createElement('img');
    dinaImg.src = './assets/img/dinosaur.png';
    dinaImg.id = 'dinaImg';
    playground.appendChild(dinaImg);
  }
}