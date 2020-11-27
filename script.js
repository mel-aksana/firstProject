"use strict";
let myName = "Aksana";
let mySecondNmame = "Melnikovich";
console.log(myName + " " + mySecondNmame);

let myNumber = 5;
const leftNumber = 1;

myNumber = 12;
console.log (myNumber);

const obj = {
    name: "Aksana",
    lastName: "Melnikovich",
    isMarrige: "true"
};
console.log(obj);
 
let arr = ['ping.png', 'orange.jpg'];
console.log(arr[1]);

//alert("Hello, World!");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Are you 18 years old?", ""); 
//console.log(answer + 5);

const answers = [];

/*answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
document.write(answers);*/
console.log(typeof(answers));

const category = "toys";
console.log(`https://someurl.com/${category}/5`);

const user = "Artem";
alert(`Hello, ${user}`);
console.log(user);

let incr = 10,
    decr = 10;
//++incr;
//--decr;
console.log(++incr);
console.log(--decr);

 const isCheked = "true",
      isClosed = "false";
console.log(isCheked || isClosed);
