import { Render } from './utils/render.js';
import { EventListener } from './utils/eventListener.js';

export class App {
  static start() {
    Render.allElements();
    EventListener.addAll();
  }
}
