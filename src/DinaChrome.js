import { Dinosaur } from './Dinosaur.js';

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
    this.startDinoRun();
  }

  createPlayground() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    document.body.appendChild(playground);
  }

  loadDinosaur() {
    this.dinosaur = new Dinosaur(2, 12);
  }

  startDinoRun() {
    this.dinoRunInterval = setInterval(
      (function (self) {
        return function () {
          self.moveDinoRight();
        }
      })(this),
      10
    );
  }

  moveDinoRight() {
    this.dinosaur.moveRight();
  }
}