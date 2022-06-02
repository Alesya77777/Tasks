const matrix = [
  [10, 22, 45, 50],
  [15, 25, 55, 60],
  [20, 35, 70, 80],
  [30, 50, 90, 95]
];

//первый способ
// function search(source, target) {
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < source[i].length; j++) {
//       if (source[i][j] === target) 
//         return { 'Число': target + ' найдено' }
//     }
//   }
//   return { 'Число': target + ' - не найдено' }
// }


//второй  способ
function search(source, target) {

  let row = 0;
  let col = source[0].length - 1;
  while (row < source.length && col >= 0) {
    if (source[row][col] === target) {
      return { 'Число': target + ' найдено' }
    } else if (source[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return { 'Число': target + ' - не найдено' }
}


console.log(search(matrix, 35));
console.log(search(matrix, 70));
console.log(search(matrix, 60));
console.log(search(matrix, 710));
console.log(search(matrix, 7));
console.log(search(matrix, 10));
console.log(search(matrix, 0));
console.log(search(matrix, 1000));
console.log(search(matrix, 15));
