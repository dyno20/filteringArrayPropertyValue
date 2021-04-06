/*
Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное 
значение должны передаваться в качестве аргументов.

Пример использования:

let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]

Результат выполнения должен быть:
[
{ name: 'Иван', surname: 'Иванов' }
]
*/

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];
    
let property = 'surname';
let value = 'Иванов'
let objectsResult = [];

function arrayFilter (objects, property, value) {
    'use strict';

    for (let i = 0; i < objects.length; i++) {
        if (objects[i][property] === value) {
            objectsResult.push(objects[i]);
        }
    }
    return objectsResult;
}

arrayFilter (objects, property, value);

console.log(objectsResult);









