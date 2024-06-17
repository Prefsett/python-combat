const fs = require("fs");

class Data {
  constructor(path) {
    this.data;
    this.__path__ = path;
    this.__encoding__ = "utf-8";

    this.getData();
  }

  async getData() {
    await this.#readData();
    return this.data;
  }

  async setData(data) {
    const key = data.id;

    if (!this.data[key]) {
      this.data[key] = data;
      await this.#writeData();
    }

    return this.getData();
  }

  async #readData() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.__path__, this.__encoding__, (err, data) => {
        if (err) reject(false);
        this.data = JSON.parse(data);
        resolve(true);
      });
    });
  }

  async #writeData() {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this.__path__,
        JSON.stringify(this.data, null, 2),
        this.__encoding__,
        (err) => {
          if (err) reject(false);
          resolve(true);
        }
      );
    });
  }
}

module.exports = Data;
