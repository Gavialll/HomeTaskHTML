// 1. Завдання: Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// Створіть змінну city.
// Присвойте їй значення «Київ».
// Змініть значення змінної city на «Львів».
// Створіть змінну address і скопіюйте в неї значення змінної city.
// Вивести значення змінної address з допомогою команди alert().

let city = "Київ";
    city = "Львів";
let address = city;

alert(address);


// 2. Завдання: Потрібно створити змінну n і записати в неї будь-яке число.
//  Створити іншу змінну result, в яку потрібно записати результат n3. 
//  Результат вивести командою console.log().

let n = prompt("Введіть число"); 

let result = n;

for(let i = 0; i < 2; i++){
    result *= n;
}

console.log(result);


// 3. Завдання: Потрібно написати програму, яка обчислить вартість покупки.
// Людина купила 4 ручки по 5,25 грн і 6 олівців по 3,50 грн. 
// Командами JavaScript потрібно обрахувати загальну вартість 
// і вивести результат в document.write (для вартостей і кількостей товарів постворювати окремі змінні).

let pricePen = 5.25;
let pricePencil = 3.50;
let numberPen = 4;
let numberPencil = 6;

let check = (pricePen * numberPen) + (pricePencil * numberPencil);

document.write("Сума до оплати: " + check + "<br \/>");

// 4. Завдання: Є рівняння наступного виду: 2х / 6 + 8 = 24. 
// З допомогою команд JavaScript потрібно знайти і вивести значення x. 
// Просто розписати формулу та вивести значення в console.log().

let x = 0;
    x = 24 - 8;
    x = x * 6;
    x = x / 2;

document.write("x = " + x);







