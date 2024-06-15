const elem = document.getElementById("clicked");
const elem2 = document.getElementById("result");
let counter = 0;

const render = () => (elem2.innerHTML = `Click: ${counter}`);
render();

elem.addEventListener("click", (evt) => {
  ++counter;
  render();
});
