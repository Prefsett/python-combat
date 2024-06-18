export class Counter {
  static set(newCounter) {
    localStorage.setItem('counter', newCounter);
  }

  static get() {
    return +localStorage.getItem('counter') || 0;
  }
}
