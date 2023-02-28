console.time('create data')
const data = [];
for(let i = 0; i < 100000; i++) {
  data.push(Math.random());
}
await Bun.write("./data.json", JSON.stringify(data));
console.timeEnd('create data');

