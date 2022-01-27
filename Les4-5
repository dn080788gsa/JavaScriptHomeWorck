/*
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
*/

function reduce(arr, fn, acc) {
  if (!Array.isArray(arguments[0])) throw new Error("parameter type should be an array");
  if (typeof arguments[1] != "function") throw new Error("parameter type should be a function");
  if (!/number|string/.test(typeof arguments[2])) throw new Error("parameter type should be a string or number");

  for (let i=0; i<arr.length; i++) {
    acc += fn(acc, arr[i], i, arr);
  }

  return acc;
}

const arr = [1,2,3];
const acc = 0;

console.log(reduce(arr, function(acc, item, i, arr) {
  return item * 2;
}, 0));
//12

console.log(reduce("", function(acc, item, i, arr) {
  return item * 2;
}, 0));
//Error: parameter type should be an array

console.log(reduce(arr, "", 0));
//Error: parameter type should be a function

console.log(reduce(arr, function(acc, item, i, arr) {
  return item * 2;
}));
//Error: parameter type should be a string or number
