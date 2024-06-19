import { Counter } from '../localstorage/counter.js';
import { IncrCounter } from '../localstorage/incrCounter.js';
import { Level } from '../localstorage/level.js';
import { Render } from './render.js';

export class EventListener {
  static addAll() {
    this.#addClick();
    this.#addUpgrade();
  }

  static #addClick() {
    const clickedElement = document.getElementById('clicked');
    const clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    clickedElement.addEventListener(clickEvent, (event) => {
      event.preventDefault();
      let counter = Counter.get() + IncrCounter.get();
      Counter.set(counter);
      Render.result();
    });
  }

  static #addUpgrade() {
    const upgradeElement = document.getElementById('upgrade');
    const counter = Counter.get();
    const incrCounter = IncrCounter.get();
    const level = Level.get();

    upgradeElement.addEventListener('click', (event) => {
      event.preventDefault();

      if (counter >= 100000) {
        counter -= 100000;

        IncrCounter.set(++incrCounter);
        Level.set(++level);
        Counter.set(counter);
      }

      Render.allElements();
    });
  }
}
