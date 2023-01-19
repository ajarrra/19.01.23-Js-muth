let myName = "Ajara";
console.log(myName);
console.log(myName.toUpperCase()) //большие буквы
console.log(myName.toLowerCase()) //маленькие
console.log(myName.length) //сколько букв

let pi = 3.121495;

console.log(pi);
console.log(pi.toFixed(2));
console.log(pi.toFixed(0)); //скок букв полсе точки

let example1 = 2 + 2; // операторы + 
let example2 = 2 - 2;
let example3 = 2 * 2;
let example4 = 2 / 2;

let example5 = 2 ** 4; // степени
let example6 = 81 ** (1 / 2); //квадратный корень 
let example7 = 27 ** (1 / 3); //кубический корень

let example8 = 5 % 2; //остаток (5 делит на два, остаток 1)

let example9 = 41 - 7 * 3;
let example10 = 5 * 2 + 3 * 4;


//No bueno
let example11 = "5" + 5; // так делать нельзя ,это будет строка ,а не цифра
let example12 = "5" / 5; //тож нельз
let example13 = "a" / "b"; //нельзя делить строку на строку

let example14 = "hello" + "world"; //а вот так склеить строки можно


//чему равняется площадь (TriangleArea) треугольника с высотой 5(Height) см и шириной 8 (Width)
let height = 5;
let width = 8;
let triangleArea = height * width / 2;
console.log("площадь треугольника равняется " + triangleArea);

// Сколько минут (minutes) в 56 (hours) часах?
let hours = 56;
let minutes = hours * 60;
console.log("в 56 часах " + minutes);

// Программист работал 8 (days) полных рабочих дней по ставке $50 (monay ) в час. Сколько он заработал? (salary)
let days = 8;
let money = 50;
let salary = money * 8;
console.log("он заработал " + salary);

// Клиент в кофейне хочет оставить 15% (tips) чаевых при счете 1566 сом (bill). Сколько это сомов? (total)
let bill = 1566;
let tips = 15;
let total = bill / 100 * tips;
console.log("он оставил " + total);

// Баскетбольная команда забила 8 двух-очковых (point2) и 6 трех-очковых (point3)мячей. Сколько очков получила команда? (balls)
let point2 = 8;
let point3 = 6;
let balls = (point2 * 2) + (point3 * 3);
console.log("всего очков " + balls);

// Расход топлива у трактора 22 (liters) литра на 100 (kilometers) километров. Сколько километров проедет трактор на 100 литрах? (dictance)
let liters = 22;
let kilometers = 100;
let allLiters = 100;
let dictance = allLiters / liters * 100;
console.log("всего " + dictance);

// У фермера 5 коров (cow), 6 кур(chiken) и 12 овец (sheep). Посчитайте кол-во ног на ферме. (farm)
let cow = 5;
let chiken = 6;
let sheep = 12;
let farm = (cow * 4 ) + (sheep * 4) + (chiken * 2);
console.log("всего ног " + farm);











