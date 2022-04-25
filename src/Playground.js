export class Playground {
  constructor(windowPercentage) {
    let playground = document.createElement('div');
    playground.id = 'playground';
    playground.style.width = windowPercentage * window.screen.width + 'px';
    document.body.appendChild(playground);
  }

  remove(){
    document.getElementById('playground').remove();
  }
}