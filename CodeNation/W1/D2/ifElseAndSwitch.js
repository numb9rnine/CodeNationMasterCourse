
//Notes and Practice 

// if (1 === "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "Manchester";
// let weather = "Rain";

// if (place == "Manchester" && weather == "Sunny") {
//     console.log("Don't be ridiculous");
// }
// else if (place == "Manchester" && weather == "Cloudy"){
//     console.log("Of course it is.");
// }
// else {
//     console.log("Just assume it's raining.")
// }

// const grade = 80;

// switch(true){
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }


//Activity 1
// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater
// than 17 and else logs “You aren’t old enough”.

let age = 18

if (age > 17){
    console.log("Yes I can serve you");
}
else{
    console.log("You aren’t old enough");
}

Take your if statement and add a variable
called country in.
Eg. if age > 17 and country == “UK”

let country = "UK"

if (age > 17 && country == "UK"){
    console.log("Yes I can serve you");
}
else{
    console.log("You aren’t old enough");
}


// Activity 2:
// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.”


const pizzaTopping = "Pepperoni"

switch(true){
        case pizzaTopping == "Mushrooms":
                console.log(`${pizzaTopping} are important ingredients for my pizza`);
            break;
        case pizzaTopping == "Pepper":
                console.log(`I dont mind having ${pizzaTopping} on my pizza`);
            break;       
        case pizzaTopping == "Pineapple":
                console.log(`${pizzaTopping} should not be on pizza`);
    }

// Activity 3:
// Create a variable called password.
// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too
// short. Otherwise log the password to the console.

let password = "openthedoor"

if (password.length < 8){
    console.log("Password is too short. It must be 8 characters")
}
else{
    console.log(password);
}

// Activity 4:
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
// Otherwise log something else. 

let num = 16

switch(true){
    case num % 3 ==0 || num%5 ==0:
        console.log('This number is divisible by 3 or 5!')
        break;
    default:
        console.log('This number is not divisible by 3 or 5!')
}

// Activity 5:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console. Otherwise log num to the console.

let num = 15

switch(true){
    case num % 3 ==0 && num % 5 ==0:
        console.log("Fizz Buzz")
    break;
    case num % 3 ==0:
        console.log("Fizz")
        break;
    case num % 5 ==0:
        console.log("Buzz")
        break;
    default:
        console.log(num)
}



// // Activity 6
let num = 7261;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}

//Activity 7

let time = 7;
let placeOfWork = "Manchester"
let townOfHome = "Chorlton"

if (time == 8){
  console.log(`I am commuting to work in ${placeOfWork}`);
} else if (time == 7){
  console.log(`I am at home in ${townOfHome}`);
} else if (time == 9){
  console.log(`I am at work in ${placeOfWork}`)
} else {
  console.log(`If it is between 9 and 5 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
}


// // Activity 8

let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
for (let i = 0; i < vowelArr.length; i++){
    index = string.lastIndexOf(vowelArr[i]);
if (index >= highestIndex ){
    highestIndex = index;
    lastVowel = vowelArr[i];
}
}
console.log(lastVowel); 
console.log(highestIndex)

// // Activity 9
let word = "bulb";
if (word.charAt(0) == word.charAt(word.length-1)){
  console.log("True")
} else {
  console.log("False")
}