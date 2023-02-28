console.time('bubble sort');
const getData = async () => {
  let data = [];
  if (typeof Bun !== 'undefined') {
    const file = await Bun.file('./data.json');
    data = await file.json();
  } else {
    const fs = require('fs');
    const raw = fs.readFileSync('./data.json');
    data = JSON.parse(raw);
  }
  return data;
}

getData().then((data) => {
  // Bubble Sort
  const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          // swap
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; 
        }
      }
    }
    return array;
  }

  bubbleSort(data);
  console.timeEnd('bubble sort');
})

