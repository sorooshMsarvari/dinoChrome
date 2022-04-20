export class DinaChrome {
  startGame() {
    this.createPlayground();
  }
  createPlayground() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    document.body.appendChild(playground);
  }
}