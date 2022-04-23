import { Cactus } from './Cactus.js';
import {PLAYGROUND_END, OBSTACLE_GENERATION_RATE} from './DinaChrome.js';


export class ObstacleManager {
  constructor(horizantalRatio) {
    this.horizantalRatio = horizantalRatio;
    this.obstacleCollection = [];
  }

  startMakingObstacle() {
    this.makeNewObstacle();
    this.obstacleGenerationInterval = setInterval(
      (function (self) {
        return function () {
          self.makeNewObstacle();
        }
      })(this),
      OBSTACLE_GENERATION_RATE
    );
  }

  makeNewObstacle() {
    this.obstacleCollection.push(new Cactus(
      this.horizantalRatio,
      PLAYGROUND_END,
      (function (self) {
        return function () {
          self.deleteObstacle();
        }
      })(this)
    ));
  }

  deleteObstacle() {
    let obs = this.obstacleCollection.shift();
    obs.remove();
  }  
}