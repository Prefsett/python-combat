export class IncrCounter {
  static set(newIncrCounter) {
    localStorage.setItem('incrCounter', newIncrCounter);
  }

  static get() {
    return +localStorage.getItem('incrCounter') || 1;
  }
}
