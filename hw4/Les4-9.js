/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

function arrayFill(el, count) {
  if (!el && !/object|number|string/.test(typeof el)) throw new Error("first parameter type should be an array or object or number or string");
  if (typeof count != "number") throw new Error("second parameter type should be a number");
  let arr = [];
  for (let i=0; i<count; i++) {
    arr.push(el);
  }
  return arr;
}

console.log(arrayFill("x",5)); // [x,x,x,x,x]
