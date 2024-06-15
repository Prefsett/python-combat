export class Counter {
  static set(counter) {
    localStorage.setItem("counter", counter);
  }

  static get() {
    return localStorage.getItem("counter") || 0;
  }
}
