const SIZE_RATIO_TO_PX = 10;

export class Hitbox {
  constructor(htmlElement, width, height, x, y) {
    this.x = x;
    this.y = y;
    this.htmlElement = htmlElement;
    this.width = width;
    this.height = height;
  }

  createHtmlElement() {
    let div = document.createElement('div');
    div.className = 'hitbox';
    div.style.width = (this.width * SIZE_RATIO_TO_PX) + 'px';
    div.style.height = (this.height * SIZE_RATIO_TO_PX) + 'px';
    div.appendChild(this.htmlElement);
    return div;
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

  
}