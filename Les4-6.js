/*
####Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/

function reduceRight(arr, fn, acc) {
  if (!Array.isArray(arguments[0])) throw new Error("parameter type should be an array");
  if (typeof arguments[1] != "function") throw new Error("parameter type should be a function");
  if (!/number|string/.test(typeof arguments[2])) throw new Error("parameter type should be a string or number");

  for (let i=arr.length-1; i>=0; i--) {
    acc += fn(acc, arr[i], i, arr);
  }

  return acc;
}

const arr = [1,2,3];
const acc = 0;

console.log(reduceRight(arr, function(acc, item, i, arr) {
  return item * 2;
}, ""));
//642

console.log(reduceRight("", function(acc, item, i, arr) {
  return item * 2;
}, 0));
//Error: parameter type should be an array

console.log(reduceRight(arr, "", 0));
//Error: parameter type should be a function

console.log(reduceRight(arr, function(acc, item, i, arr) {
  return item * 2;
}));
//Error: parameter type should be a string or number
