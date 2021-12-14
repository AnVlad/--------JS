// Практика JS 5.
// Напишите скрипт, который принимает с клавиатуры 2 числа, и если первое больше второго, 
// то выводит на экран их сумму, если же наоборот - произведение. Если числа одинаковые, выводит на экран 'числа одинаковые'.


const firstNumb = prompt("Number please", "20");
const secondNumb = prompt("Number please", "22");

function compare (firstNumb, secondNumb) {

  if (firstNumb == secondNumb) return "Числа одинаковые"

  if (firstNumb > secondNumb) return firstNumb + secondNumb


  return firstNumb * secondNumb
}


console.log(compare(+firstNumb, +secondNumb));
