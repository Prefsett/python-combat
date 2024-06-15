const fs = require("fs");

class Data {
  constructor(path) {
    this.data;
    this.__path__ = path;
    this.__encoding__ = "utf-8";
  }

  async getData() {
    await new Promise((resolve) => {
      fs.readFile(this.__path__, this.__encoding__, (err, data) => {
        if (err) return 0;
        this.data = JSON.parse(data);
        resolve(true);
      });
    });

    return this.data;
  }
  async setData(data) {
    const key = data.id;

    if (this.data[key]) return 0;

    this.data[key] = data;

    await new Promise((resolve) => {
      fs.writeFile(
        this.__path__,
        JSON.stringify(this.data, null, 2),
        this.__encoding__,
        (err) => {
          if (err) return 0;
          resolve(true);
        }
      );
    });
  }
}

module.exports = Data;
