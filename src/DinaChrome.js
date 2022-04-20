export class DinaChrome {
  startGame() {
    let playground = document.createElement('div');
    playground.id = 'playground';
    console.log(playground);

    document.body.appendChild(playground);
    console.log(document.body);
  }
}