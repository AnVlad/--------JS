// Практика JS 21.
// Дана строка, состоящяя из букв a,b,c. Ваша задача поменять расположение букв a и b, но не трогать c.

// Пример кода:
//    switcheroo('abc') =>'bac'
//    switcheroo('aaabcccbaaa') =>'bbbacccabbb'
//    switcheroo('ccccc') =>'ccccc'
//    switcheroo('acb') =>'bca'
//    switcheroo('aabacbaa') =>'bbabcabb'


function switcheroo (params) {

  let result = [];

  for (let param of params) {

    if (param == "a") {
      
      result.push("b");

    } else if (param == "b") {

      result.push("a");
    
    } else {

      result.push(param);

    }

  }

  return result.join("");
}









console.log( switcheroo('abc') );
console.log( switcheroo('aaabcccbaaa') );
console.log( switcheroo('ccccc') );
console.log( switcheroo('acb') );
console.log( switcheroo('aabacbaa') );