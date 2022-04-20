import { Dinosaur } from './Dinosaur.js';

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
    this.dinosaur.run();
    this.dinosaur.jump();
    
  }

  createPlayground() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    document.body.appendChild(playground);
  }

  loadDinosaur() {
    this.dinosaur = new Dinosaur(0, 0);
  }

  moveDinoRight() {
    this.dinosaur.moveRight();
  }
}