console.time('insertion sort');
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
  // Insertion Sort
  const insertionSort = (array) => {
    for (let index = 1; index < array.length; index++) {
      let value = array[index];
      let testIndex = index - 1;
      while (testIndex > -1 && array[testIndex] > value) {
        array[testIndex + 1] = array[testIndex];
        testIndex--;
      }
      array[testIndex + 1] = value;
    }
    return array;
  }  
  
  insertionSort(data)
  console.timeEnd('insertion sort');
})

