export class Level {
  static set(newLevel) {
    localStorage.setItem('level', newLevel);
  }

  static get() {
    return +localStorage.getItem('level') || 0;
  }
}
