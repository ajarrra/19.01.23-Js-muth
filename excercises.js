let lightSwitchOn = true;// булевый тип данных
let windowIsOpen = true;

let example1 = 5 > 10; // пять больше 10
let example2 = 5 < 10; // 5 меньше 10
let example3 = 5 >= 10;//больше или равно
let example4 = 5 === 10; //равны
let example5 = 5 !== 10; //не равняется

console.log(example5);

if (5 === 5){ //будет выводиться потому что это правда
    console.log("Switch is on");
}

else{ //если не првда будет выводиться
    console.log("Switch is off");
}

let a = 5;
let b = 5;
if (a===b) {
    console.log("A equal B"); 
}
else {
    console.log("A is not equal to B");
}

//25 студентов(students) пришли на курс програмирования, поместятся ли они с 20 местами(capacity)
let students = 25;
let capacity = 20;
if (students <= capacity){ //студенты меньше или равно
    console.log("Студенты поместятся ");
}
else{
    console.log("Студенты не поместятся");
}

console.log("Столица КР?")
let answer = "Бишкек";
if (answer === "Бишкек"){
    console.log("правильно");
}
else{
    console.log("не правильно");
}


let login = "ElonMusk";
let password = "I am the best";
if (login === "ElonMusk" && password === "I m the best"){//или && , 
    console.log("correct");
}
else{
    console.log("Incorrect");
}









