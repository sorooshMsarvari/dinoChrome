import { Dinosaur } from './Dinosaur.js';

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
  }
  
  createPlayground() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    document.body.appendChild(playground);
  }
  
  loadDinosaur() {
    this.dinosaur = new Dinosaur(2, 5);
  }
}