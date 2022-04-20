export class Playground {
  constructor(window_percentage) {
    let playground = document.createElement('div');
    playground.id = 'playground';
    playground.style.width = window_percentage*100 + 'vw';
    document.body.appendChild(playground);
  }
}