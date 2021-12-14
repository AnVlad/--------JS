// Практика JS 20.
// Необходимо реализовать функцию, которая на входе принимает массив с разными типами данных
//  ==> ['a', 1, 2, false, 'b'], а возвращает объект, в котором эти типы данных рассортированны по ключам.

// Пример кода:
// {
//    number: [1, 2],
//    string: ['a', 'b'],
//    boolean: [false]
// }



let types = {

  number: [],
  string: [],
  boolean: []

}

function sort (params) {
  let number = [];
  let string = [];
  let boolean = [];

  for (let param of params) {

    if (/false/.test(param) || /true/.test(param)) {
      boolean.push(param);
    } else if (/[a-zA-Z]/.test(param)) {
      string.push(param);
    } 

    if (/[0-9]/.test(param)) {
      number.push(param);
    }

  }

  types.number = number;
  types.string = string;
  types.boolean = boolean;

  return types;
}



console.log(sort(['a', 1, 2, false, 'b']));