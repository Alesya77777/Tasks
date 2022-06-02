function findSubstring(string) {
  let map = {};
  let count = 0;
  let index = 0;

  for (let i = 0; i < string.length; i++) {

    if (string[i] === string[index]) {
      count++;
    } else {
      map[index] = count;
      index = i;
      count = 0;
      count++;
    }
    map[index] = count;
  }

  let maxNumber = 0;
  let indexMaxNumber = 0;
  for (key in map) {
    if (maxNumber < map[key]) {
      maxNumber = map[key];
      indexMaxNumber = key;
    }
  }

  for (let i = 0; i < string.length; i++) {
    symbol = string[indexMaxNumber];
  }

  console.log(map)


  return {
    'Максимальное число символов в подстроке равно': maxNumber,
    '\nИндекс, с которого начинается подстрока равен': indexMaxNumber,
    '\nСимвол самой длинной подстроки равен': symbol
  }

};

console.log(findSubstring('aaabbbbbccddaaa'));
//console.log(findSubstring('aaaddddbbbbbccddaaa'));
//console.log(findSubstring('ammmmDDDmmmmmmmmaabbbbbmmmmmmmmmmmmccddaaa'));
console.log(findSubstring('aaabbbbbcmmmmmmmmmmmmmmmmmmcddaaa'));

