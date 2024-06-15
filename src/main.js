import { Counter } from "./localStorage.js";

const clickedElement = document.getElementById("clicked");
const counterElement = document.getElementById("result");

let counter = Counter.get();

const render = () => (counterElement.innerHTML = `Click: ${counter}`);
render();

clickedElement.addEventListener("click", (evt) => {
  Counter.set(++counter);
  render();
});
