"use strict";

/*
#### Задача 2

Напишите свою имплементацию функции `mix`. 
Данная функция принимает неограниченное количество аргументов. 
Каждый аргумент по своему типу должен быть функцией иначе генерировать ошибку. 
Функция `mix` запускает свои callback функции последовательно. 
В качестве параметра каждый callback принимает то что возвращает предыдущий callback. Первый сallback не принимает параметров.

Пример вызова:

```javascript
mix(() => {
return 0;
}, (prev) => {
return prev + 1;
}, (prev) => {
return prev * 2;
}) // 2
```
*/

function mix() {
    //преобразуем псевдомассив в массив
    const agrs = Array.prototype.slice.call(arguments);
    if (!agrs.every(item => typeof item == "function")) throw new Error("Some argument is not a function");
    let res;
    for (let i=0; i<agrs.length; i++) {
        res = agrs[i](res || null);
    }
    console.log(res);
}

mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2