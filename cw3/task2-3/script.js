"use strict";

// Создайте метод который будет умножать элементы массива на то число которое будет
// передавать пользователь. Сделайте так, чтобы метод наследовался каждым массивом
// подобно методу pop().

// let arr = [1, 2, 3, 4, 5];

//  Array.prototype.myMethod = function(num) {
//      return this.map(function (item, index, array) {
//          return item*2;
//      })
//  };

//  console.log(arr.myMethod(2));

// Сделайте функцию, которая считает и выводит количество своих вызовов.
//                     func(); //выведет 1
//                     func(); //выведет 2
//                     func(); //выведет 3
//                     func(); //выведет 4

// let calk = function() {
//     let count = 1;

// return function() {
//     return count++
// }
// };
// console.log(calk());
// let funk = calk();

// Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1
//  до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из
//  этого промежутка. Решите задачу через замыкания - в замыкании должен хранится
// массив чисел, которые уже были сгенерированы функцией.

function calk() {
  const number = [];
  return function () {
    while (number.length <100) {
        debugger
      let rundom = Math.floor(Math.random() * 100 + 1);

      if (!number.includes(rundom)) {
        number.push(rundom);
      }
    }
    return number;
  };
}
const count = calk();
console.log(count());
