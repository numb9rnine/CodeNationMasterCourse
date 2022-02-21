//Notes and practice

//let text = "All Around The World"
//let letter = text.charAt(7)
//console.log(letter);

// let i = 10;
// i += 2;
// console.log(i);

// let favouriteDrink = "Coffee";
// console.log(favouriteDrink);

// let favouriteDrink = "Coffee";
// console.log("My favourite drink is " +favouriteDrink);

//Activity 1

let name = 'Jim';
let age = 100;
let favDrink = 'Coffee'

console.log(`Hi, my name is ${name}. I am  ${age} years old and my favourite drink is ${favDrink}`);

let name = 'Jim';
let age = 50;
let favColour = "Red"

name = 'James';
age = 80;
favColour = 'Brown';

// console.log(`His name is ${name}, he is ${age} and he likes the colour ${favColour}`);
console.log(`By the time he was ${80} he went by ${name} and preferred ${favColour}`);

//Activity 2

let breakfast = 'cereal';
let lunch = 'sandwich';
let dinner = 'curry';

console.log(`Today i will have ${breakfast} in the morning, ${lunch} for lunch and ${dinner} in the evening`);

breakfast = 'eggs';
lunch = 'salad';
dinner = 'pizza';

console.log(`Tomorrow i will have ${breakfast} in the morning, ${lunch} for lunch and ${dinner} in the evening`);


//activity 3
//Create a program that calculates the number of days from today to your birth date

const bday = new Date("05/04/2002");
const today = new Date("02/15/2021");

const Difference_In_Time = today.getTime() - bday.getTime();

const DifferenceInDays = Difference_In_Time / (1000 * 3600 * 24);

console.log('The number of days since my birthday is ' + Math.round(DifferenceInDays));

//Activity 4

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);