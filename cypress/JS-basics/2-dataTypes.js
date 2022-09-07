/*
Типи даних:


Прості або примітиви:
- числа
- текст
- логічні або булевий
- null
- undefined
- symbol
- BigInt

Об'єкти:
- масиви
- функції
- об'єкт дати
- регулярні вирази
- помилки
- об'єкт

*/

// int - числа до 2^53

let number = 4;
let floatnumber = 5.5;

console.log(4/0); // Infinity тип
console.log(-4/0); // -Infinity тип

console.log('a'* 5); // NaN - не число

let booleanType = true/false; 
console.log

const a = null; 
let b;
console.log(b); // Undefined

let object = {}
console.log(object);

let person = {
    age: 20,
    name: "Vlad",
    isMarried: true
};

console.log('Вік.'+ person.age);
console.log(`Імя ${person.name}`); // Імя Vlad
console.log(person.isMarried);

let arr = ['text', 6, {}, []];
console.log(arr[0,1]);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3}

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Oksana': 1200,
}
let salaryArr = [ 'Anna', 1000, 'Oksana', 1200];

let someArr = [1, 2, 3];
let objArr = {
    0: 1,
    1: 2,
    2: 3
};
console.log(someArr[0]);
console.log(objArr[0]);

let objArr1 = {
    0: 1,
    b: 2,
    c: 3
};
console.log(objArr1["a"]);

let num = 1;
console.log(num);
num = 2;
console.log(num);

let objArr2 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objArr2["a"]);
objArr2.a = 5;
console.log(objArr2.a);






