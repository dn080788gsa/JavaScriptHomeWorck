"use strict";

/*
#### Задача 4

Написать свою имплементацию функции `compose`. 
Функция принимает неограниченное количество параметров. 
Каждый аргумент должен быть функцией. Каждый аргумент принимает 1 параметр. 
Функция `compose` возвращает другую функцию с одним параметром.

Суть работы функции `compose` отображает данная формула `compose(f, g)(x) = f(g(x))`

Пример вызова:

```javascript
compose((str) => {
return str + 'c';
}, (str) => {
return str + 'b';
})('a'); // 'abc'
*/

function compose() {
    //преобразуем псевдомассив в массив
    const agrs = Array.prototype.slice.call(arguments);
    if (!agrs.every(item => typeof item == "function")) throw new Error("Some argument is not a function");

    let res = "";
    for (let i=agrs.length-1; i>=0; i--) {
        res = agrs[i](res);
    }

    return function(x) {
        return x + res;
    };
}

let result = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'

console.log(result);