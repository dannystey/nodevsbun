console.time('generate data')
const fs = require('fs');

const data = [];
for(let i = 0; i < 100000; i++) {
  data.push(Math.random());
}
fs.writeFile('./data.json', JSON.stringify(data), () => {
  console.timeEnd('generate data');
});

