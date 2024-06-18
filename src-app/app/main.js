import { Counter } from "./localstorage/counter.js";

export class App {
  static start() {
    const clickedElement = document.getElementById("clicked");
    const counterElement = document.getElementById("result");

    let counter = Counter.get();

    const render = () => (counterElement.innerHTML = `${counter}`);
    render();

    clickedElement.addEventListener("click", (evt) => {
      Counter.set(++counter);
      render();
    });
  }
}
