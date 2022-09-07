"use strict";
let number = 5; 
const number1 = 1000;

// camelCase
// sake_case
// UPPER_SNAKE_CASE (часто називають константи)
// kebab-case (часто називають папки)
// PascalCase (часто використовують для назви класів)

// прямих констант не буває 
const obj = {
    age: 20
};
// obj.age = 18;
obj = 1;
console.log(obj.age);

// Об'явлння змінних let and var  (var - старий варіант, створюється в пам'яті одразу, 
//let скрипт виконується як тільки прийшла чрга виконання) 


console.log(lastName);
var lastName = "Petrenko";

let lastName1 = "Petrenko1";
console.log(lastName1);

// Область видимості
// var доступний усюди  поза {} 
// let доступний лише в { }
{ 
    let nmber2 = 4;
    console.log(nmber2);   
}
let nmber3 = 4;


