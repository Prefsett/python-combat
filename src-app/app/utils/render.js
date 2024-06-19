import { Counter } from '../localstorage/counter.js';
import { IncrCounter } from '../localstorage/incrCounter.js';
import { Level } from '../localstorage/level.js';

export class Render {
  static allElements() {
    this.result();
    this.upgradeInfo();
  }

  static result() {
    const counterElement = document.getElementById('result');
    const counter = Counter.get();
    counterElement.innerHTML = `${counter}`;
  }

  static upgradeInfo() {
    this.#level();
    this.#coins();
  }

  static #level() {
    const levelElement = document.getElementById('level');
    const level = Level.get();
    levelElement.innerHTML = `lvl: ${level}`;
  }

  static #coins() {
    const coinsElement = document.getElementById('coins');
    const incrCounter = IncrCounter.get();
    coinsElement.innerHTML = `coins: ${incrCounter}`;
  }
}
