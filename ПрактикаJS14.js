// Практика JS 14.
// Удалите n восклицательных знаков в предложении слева направо. n - положительное целое число.

//  Пример кода:
//    remove("Hi!",1) => "Hi"
//    remove("Hi!",100) => "Hi"
//    remove("Hi!!!",1) => "Hi!!"
//    remove("Hi!!!",100) => "Hi"
//    remove("!Hi",1) => "Hi"
//    remove("!Hi!",1) => "Hi!"
//    remove("!Hi!",100) => "Hi"
//    remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
//    remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"



function remove (param, n) {

  let result = [];
  let i = 0;
  
  for (par of param) {

    if ((par == "!") && (i < n)) {
      i++
    } else {
      result.push(par);
    }

  }

  return result.join("")
}


console.log( remove("Hi!", 1) );
console.log( remove("Hi!", 100) );
console.log( remove("Hi!!!", 1) );
console.log( remove("Hi!!!", 100) );
console.log( remove("!Hi", 1) );
console.log( remove("!Hi!", 1) );
console.log( remove("!Hi!", 100) );
console.log( remove("!!!Hi !!hi!!! !hi", 1) );
console.log( remove("!!!Hi !!hi!!! !hi", 3) );
console.log( remove("!!!Hi !!hi!!! !hi", 5) );
console.log( remove("!!!Hi !!hi!!! !hi", 100) );