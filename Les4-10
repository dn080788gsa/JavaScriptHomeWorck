/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/

function reverse(arr) {
  if (!Array.isArray(arr)) throw new Error("parameter type should be an array");
  if (arr.length == 0) throw new Error("empty array");
  
  let newArr = [];
  for (let i=arr.length-1; i>=0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const arr = [3,2,1];
console.log(reverse(arr)); // [1,2,3]
