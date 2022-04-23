const SIZE_RATIO_TO_PX = 10;

export class Hitbox {
  constructor(htmlElement, width, height, x, y, horizantal_ratio) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.horizantal_ratio = horizantal_ratio;

    this.div = this.createHtmlElement(htmlElement);
    this.addToPlayground();
    
  }

  
  createHtmlElement(htmlElement) {
    let div = document.createElement('div');
    div.className = 'hitbox';
    div.style.width = (this.width * SIZE_RATIO_TO_PX) + 'px';
    div.style.height = (this.height * SIZE_RATIO_TO_PX) + 'px';
    div.appendChild(this.htmlElement);
    return div;
  }

  addToPlayground() {
    let playground = document.getElementById('playground');
    this.render();
    playground.appendChild(this.div);
  }

  render() {
    this.div.style.top = this.y * 10 + 'px';
    this.div.style.left = (this.x * this.horizantal_ratio) + 'px';
  }

  moveUp(delta) {
    this.y -= delta;
  }

  moveDown(delta) {
    this.y += delta;
  }

  moveRight(delta) {
    this.x += delta;
  }

  moveLeft(delta) {
    this.x -= delta;
  }

  reachedLeftEnd() {
    return this.x <= 0;
  }


  remove() {
    let playground = document.getElementById('playground');
    playground.removeChild(this.div);
    delete this;
  }


}