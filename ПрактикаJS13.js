// Практика JS 13.
// Напишите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.

//  Пример кода:
//    hexToDec('1') => 1
//    hexToDec('a') => 10
//    hexToDec('10') => 16
//    hexToDec('FF') => 255
//    hexToDec('-C') => 12



function hexToDec(hex) {

  hex = parseInt(hex, 16)

  if (hex < 0) hex *= -1

  return hex;
}




console.log( hexToDec('1') );
console.log( hexToDec('a') );
console.log( hexToDec('10') );
console.log( hexToDec('FF') );
console.log( hexToDec('-C') );