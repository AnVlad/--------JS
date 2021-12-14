// Практика JS 4.
// Дан массив ['Саша', 'Петя', 'Оксана'], сделайте из него ['Оксанa', 'Олег', 'Саша']. 
// Реализуйте эту задачу, двумя способами. 
// В первом исходный массив должен быть изменен, во втором - не должен быть изменен.




let names = ['Саша', 'Петя', 'Оксана'];


function noChange(names) {
  let names2 = [];


  // Изменить массив
  for (let name of names) {
  
    if (name == "Петя") {
      names2.unshift("Олег");
    } else {
      names2.unshift(name);
    }
  }


  return names2
}



function Change(names1) {
  let names2 = [];
  let a = names1.length;
  
  for (let i = 0; i < a; i++) {
    let name = names1.pop();
    
    if (name == "Петя") {
      name = "Олег";
    }
    names2.push(name)
  }
  
  names = names2;
  
  return names2
}


console.log(noChange(names));
console.log(names);

console.log(Change(names));
console.log(names);






