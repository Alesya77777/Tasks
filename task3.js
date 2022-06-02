const array = [3, 7, 9, 4, 0, 5, 6];

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  else {
    const pivot = array[Math.floor(Math.random() * array.length)];
    const less = array.filter(value => value < pivot);
    const greater = array.filter(value => value > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)]
  }

}

console.log(quickSort(array));
