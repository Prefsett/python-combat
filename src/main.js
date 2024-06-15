import { Counter } from "./localStorage.js";

const clickedElement = document.getElementById("clicked");
const counterElement = document.getElementById("result");

let counter = 0;

const render = () => (counterElement.innerHTML = `Click: ${counter}`);
render();

clickedElement.addEventListener("click", (evt) => {
  ++counter;
  render();
});
