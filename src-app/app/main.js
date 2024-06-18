import { Counter } from './localstorage/counter.js';

export class App {
  static #counter = Counter.get();
  static #incrNum = 1;

  static start() {
    const clickedElement = document.getElementById('clicked');

    this.#render();

    clickedElement.addEventListener('touchend', (event) => {
      event.preventDefault();
      App.#click;
    });
  }

  static #render() {
    const counterElement = document.getElementById('result');
    counterElement.innerHTML = `${App.#counter}`;
  }

  static #click(evt) {
    App.#counter += App.#incrNum;
    Counter.set(App.#counter);
    App.#render();
  }
}
