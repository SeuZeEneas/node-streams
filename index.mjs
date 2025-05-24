import { createWriteStream } from "fs";
import { pipeline, Readable, Transform, Writable } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

const readableStream = Readable({
  read() {
    for (let index = 0; index < 1e5; index++) {
      const person = {
        id: Date.now() + index,
        name: `Jhon Due ~ ${index}`,
        address: 'St.Lucius',
        city:'New York'
      };
      const data = JSON.stringify(person);
      this.push(data);
    }
    this.push(null);
  },
});

const writableMapToCsv = Transform({
  transform(chunk, enconding, cb) {
    const data = JSON.parse(chunk);
    const result = `${data.id},${data.name.toUpperCase()}, ${data.address},${data.city}\n`;

    cb(null, result);
  },
});

const setHeader = Transform({
  transform(chunk, enconding, cb) {
    this.counter = this.counter ?? 0;

    if (this.counter) {
      return cb(null, chunk);
    }

    this.counter += 1;

    cb(null, "id, name, address, city\n".concat(chunk));
  },
});

await pipelineAsync(
  readableStream,
  writableMapToCsv,
  setHeader,
  createWriteStream("my.csv"),
 );

console.log("Proccess end!");
