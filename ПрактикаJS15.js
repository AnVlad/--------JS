// Практика JS 15.
// Вы должны реализовать функцию, которая возвращает разницу между наибольшим и наименьшим значением 
// в списке , полученном в качестве аргумента функции. Массив, который получает функция в качестве аргумента, 
// может содержать положительные и отрицательные числа. Если массив пуст или имеет одно значение, верните ноль. 
// Изначально, массив будет подан в неотсортированном виде. 
// Пример: maxDiff([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7

// Пример кода:
//    maxDiff([0, 1, 2, 3, 4, 5, 6]) => 6
//    maxDiff([-0, 1, 2, -3, 4, 5, -6]) => 11
//    maxDiff([0, 1, 2, 3, 4, 5, 16]) => 16
//    maxDiff([16]) => 0
//    maxDiff([]) => 0


function maxDiff(params) {
  let max = params[0];

  if (isNaN(max)) return 0

  let min;
  
  for (let param of params) {

    if (param > max) max = param;

  }

  min = max;

  for (let param of params) {

    if (param < min) min = param;

  }
  
  return max - min
}


console.log( maxDiff([0, 1, 2, 3, 4, 5, 6]) );
console.log( maxDiff([-0, 1, 2, -3, 4, 5, -6]) );
console.log( maxDiff([0, 1, 2, 3, 4, 5, 16]) );
console.log( maxDiff([16]) );
console.log( maxDiff([]) );