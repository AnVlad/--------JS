// Практика JS 12.
// Завершите функцию, которая принимает два целых числа ( a, b, где a <  b) и 
// возвращает массив всех целых чисел между входными параметрами, включая их.

//  Пример кода:
//    between(1, 4) => [1, 2, 3, 4]
//    between(-2, 2) => [-2, -1, 0, 1, 2]
//    between(20, 25) => [20, 21, 22, 23, 24, 25]



function between(start, end) {
  let betweenNum = [];
  
  for (let i = start; i <= end; i++) {
    betweenNum.push(i)
  }

  return betweenNum
}



console.log( between(1, 4) );
console.log( between(-2, 2) );
console.log( between(20, 25) );

