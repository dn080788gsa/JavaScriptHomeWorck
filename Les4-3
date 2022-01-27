/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
```
*/

function every(arr, fn) {
  if (!Array.isArray(arguments[0])) throw new Error("parameter type should be an array");
  if (typeof arguments[1] != "function") throw new Error("parameter type should be a function");
  let res = true;
  for (let i=0; i<arr.length; i++) {
    if (!fn(arr[i], i, arr)) res = false;
  }
  return res;
}

const arr = [1,2,3];

console.log(every(arr, function(item, i, arr) {
  return item > 1;
}));
//false

console.log(every("", function(item, i, arr) {
  return item > 1;
}));
//Error: parameter type should be an array

console.log(every(arr, function(item, i, arr) {
  return item > 1;
}));
//Error: parameter type should be a function
