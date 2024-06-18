import { Counter } from './localstorage/counter.js';

export class App {
  static #counter = Counter.get();
  static #incrNum = 1;

  static start() {
    const clickedElement = document.getElementById('clicked');

    this.#render();

    if ('ontouchstart' in window) {
      clickedElement.addEventListener('touchstart', App.#click);
    } else {
      clickedElement.addEventListener('click', App.#click);
    }
  }

  static #click(event) {
    event.preventDefault();
    App.#counter += App.#incrNum;
    Counter.set(App.#counter);
    App.#render();
  }

  static #render() {
    const counterElement = document.getElementById('result');
    counterElement.innerHTML = `${App.#counter}`;
  }
}
