// Практика JS 1.
// Создайте переменную с помощью camelCase, snake_case и PascalCase 
//  и присвойте им значения от 0-я до 2-х. Выведите значения этих переменных на экран 
//  с помощью метода alert и console.log. Скажите, чем кардинально отличается alert и console.log?

const camelCase = 0;
const snake_case = 1;
const PascalCase = 2;

console.log(camelCase, snake_case, PascalCase);
alert(camelCase);
alert(snake_case);
alert(PascalCase);

// console.log() не останавливает процесс выполнения кода
// alert показывает [object Object], в то время как console.log() показывает более полезную информацию


let example = {a: 'foo', b: 'bar'};
console.log(example);
alert(example);