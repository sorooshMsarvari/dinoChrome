import { Dinosaur } from './Dinosaur.js';

export class DinaChrome {
  startGame() {
    this.createPlayground();
    this.loadDinosaur();
    document.body.onkeydown = (function (self) {
      return function (e) {
        self.handleKeyPress(e);
      }
    })(this)
  }

  createPlayground() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    document.body.appendChild(playground);
  }

  loadDinosaur() {
    this.dinosaur = new Dinosaur(0, 0);
  }

  handleKeyPress(e) {
    // alert(String.fromCharCode(e.keyCode)+" --> "+e.keyCode);
    if(e.keyCode === 32){
      console.log(this)
      this.dinosaur.jump();
    }
    
  }
}