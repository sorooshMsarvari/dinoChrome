export class Playground {
  constructor(window_percentage) {
    let playground = document.createElement('div');
    playground.id = 'playground';
    playground.style.width = window_percentage * window.screen.width + 'px';
    document.body.appendChild(playground);
  }
}