import { Cactus } from './Cactus.js';
import {PLAYGROUND_END} from './DinaChrome';


export class ObstacleManager {
  constructor(horizantal_ratio) {
    this.horizantal_ratio = horizantal_ratio;
    this.obstacle_array = [];
  }

  make_new_obstacle() {
    this.obstacle_array.push(new Cactus(
      this.horizantal_ratio,
      PLAYGROUND_END,
      (function (self) {
        return function () {
          self.delete_obstacle();
        }
      })(this)
    ));
  }

  delete_obstacle() {
    let obs = this.obstacle_array.shift();
    obs.remove();
  }
}