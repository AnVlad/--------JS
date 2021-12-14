// Практика JS 16.
// Напишите функцию, которая принимает в себя строку и число. Верните, в виде массива, только те слова, 
// длинна которых превышает число.

// Пример кода:
//    example('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5) 
//          => ['Сегодня', 'Отличный', 'самого', 'пойдем', 'купаться']

//    example('Над городом облака, коридоры, берега, проспект, река.', 7) => ['коридоры', 'проспект']




function example (params, n) {
  const regex =  /[\,\.]/g
  params = params.replace(regex, "").split(" ");

  let result = [];
  
  for (let param of params) {

    let permit = check(param, n);

    if (permit != 0) result.push(param)

  }

  return result;
}


function check (param, n) {

  if (param.length > n) return param

  return 0;
}


console.log( example('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5) );

console.log( example('Над городом облака, коридоры, берега, проспект, река.', 7) );
