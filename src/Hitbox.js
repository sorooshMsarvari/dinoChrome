import {PLAYGROUND_END, OBSTACLE_GENERATION_RATE} from './DinaChrome.js';

const SIZE_RATIO_TO_PX = 10;

export class Hitbox {
  constructor(htmlElement, width, height, x, y, horizantalRatio) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.horizantalRatio = horizantalRatio;

    this.div = this.createHtmlElement(htmlElement);
    this.addToPlayground();
  }

  
  createHtmlElement(htmlElement) {
    let div = document.createElement('div');
    div.className = 'hitbox';
    div.style.width = (this.width * SIZE_RATIO_TO_PX) + 'px';
    div.style.height = (this.height * SIZE_RATIO_TO_PX) + 'px';
    div.appendChild(htmlElement);
    return div;
  }

  addToPlayground() {
    let playground = document.getElementById('playground');
    this.fixXAtEnd();
    this.render();
    playground.appendChild(this.div);
  }

  render() {
    this.div.style.top = this.y * 10 + 'px';
    this.div.style.left = (this.x * this.horizantalRatio) + 'px';
  }

  fixXAtEnd() {
    if(this.x === PLAYGROUND_END){
      this.x -= this.width * SIZE_RATIO_TO_PX / this.horizantalRatio;
    }
  }

  moveUp(delta) {
    this.y -= delta;
  }

  moveDown(delta) {
    this.y += delta;
  }

  zeroVertical() {
    this.y = 0;
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

  hasCollied(other) {
    const horizantalCollision = this.hasColliedLinear(this.x, this.width, other.x, other.width);
    const vertivalCollision = this.hasColliedLinear(this.y, this.height, other.y, other.height);
    return horizantalCollision && vertivalCollision;
  }

  hasColliedLinear(startPoint1, value1, startPoint2, value2) {
    return (startPoint1 <= startPoint2 && startPoint2 <= startPoint1 + value1) ||
    (startPoint2 <= startPoint1 && startPoint1 <= startPoint2 + value2);
  }

}