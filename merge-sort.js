console.time('merge sort');
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
  // Merge Sort
  const merge = (left, right) => {
    const result = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    const leftRemains = left.slice(leftIndex);
    const rightRemains = right.slice(rightIndex);
  
    return [...result, ...leftRemains, ...rightRemains];
  }
  
  const mergeSort = (array) => {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  mergeSort(data)
  console.timeEnd('merge sort');
})

