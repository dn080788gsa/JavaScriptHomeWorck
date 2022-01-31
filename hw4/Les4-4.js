/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

function some(arr, fn) {
  if (!Array.isArray(arguments[0])) throw new Error("parameter type should be an array");
  if (typeof arguments[1] != "function") throw new Error("parameter type should be a function");
  let res = false;
  for (let i=0; i<arr.length; i++) {
    if (fn(arr[i], i, arr)) res = true;
  }
  return res;
}

const arr = [1,2,3];

console.log(some(arr, function(item, i, arr) {
  return item > 1;
}));
//true

console.log(some("", function(item, i, arr) {
  return item > 1;
}));
//Error: parameter type should be an array

console.log(some(arr, function(item, i, arr) {
  return item > 1;
}));
//Error: parameter type should be a function
