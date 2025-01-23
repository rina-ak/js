document.addEventListener("DOMContentLoaded", function() {

/* задача 1 */

    let age = parseInt(prompt("Введите ваш возраст:"));
    if (age < 65) {
        alert("Вам ещё рано на пенсию");
    } else {
        alert("Поздравляем с пенсионным возрастом!");
    }
    
/* задача 2 */

let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 > num2) {
    alert("Первое число больше");
} else if (num2 > num1) {
    alert("Второе число больше");
} else {
    alert("Числа равны");
}

/* задача 3  */

let number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
    alert("Это чётное число");
} else {
    alert("Это нечётное число");
}

/* задача 4 */

const secretNumber = 3;
let guess = parseInt(prompt("Угадайте число от 1 до 10:"));

if (guess === secretNumber) {
    alert("Вы угадали!");
} else {
    alert("Попробуйте ещё раз!");
}

/* задача 5 */

let login = prompt("Введите логин:");
let password = prompt("Введите пароль:");

if (login === "admin" && password === "12345") {
    alert("Добро пожаловать!");
} else {
    alert("Неверный логин или пароль");
}

/* задача 6 */

let year = parseInt(prompt("Введите год:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("Это високосный год");
} else {
    alert("Это не високосный год");
}

/* задача 7 */

let number2 = parseInt(prompt("Введите число:"));

if (number2 > 100) {
    alert("Большое число");
} else if (number2 < 100) {
    alert("Маленькое число");
} else {
    alert("Точно 100!");
}

});