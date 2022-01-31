/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

function forEach(arr, fn) {
  if (!Array.isArray(arguments[0])) throw new Error("parameter type should be an array");
  if (typeof arguments[1] != "function") throw new Error("parameter type should be a function");

  for (let i=0; i<arr.length; i++) {
    fn(arr[i], i, arr);
  } 
}

const arr = [1,2,3];

forEach(arr, function(item, i, arr) {
  console.log({item});
});
//{ item: 1 }
//{ item: 2 }
//{ item: 3 }

forEach("", function(item, i, arr) {
  console.log({item});
});
//Error: parameter type should be an array

forEach(arr, "");
//Error: parameter type should be a function
