//Work and Practice 

// let favSongs = [
//     "The Beatles - Tomorrow Never Knows",
//     "Four Tet - Teenage Birdsong",
//     "DJ Shadow - Midnight In a Perfect World"
// ];
// favSongs.push("The Mars Volta - Cicatriz ESP", "Moderat - Finder");
// favSongs.pop();
// console.log(favSongs);

// //Lesson Work

// let toDoList = [
//     "Clean", 
//     "Pay Bill",
//     "Shopping",
//     "Fix Laptop"
// ]

// toDoList.unshift("Wake Up", "Brush Teeth");

// console.log(toDoList);

// let favouriteDrinks = ["Coke Zero", "Sprite", "Lemon Fanta",];

// // console.log(favouriteDrinks[0]);
// // console.log(favouriteDrinks[1]);
// // console.log(favouriteDrinks[2]);

// for(let i = 0; i < favouriteDrinks.length; i++){
//     console.log(favouriteDrinks[i]);
// }

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);


// let age = 15;

// while( age < 18 ){
//     console.log("You're a child!");
//     age++;
// }

// console.log("You're an adult.");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);



//Activity 1

let favFilms = ["Apocalypse Now", "The Godfather", "Kill Bill", "Fight Club", "Inception"];

favFilms.push("The Joker", "Interstellar");

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}

//Activity 2

const numbersList = Array(6) 
				.fill()
				.map(() => 50 * Math.random());

console.log(numbersList);

//To use Integers instead of floats

const numbersList = Array(6) 
				.fill()
				.map(() => Math.floor(50 * Math.random()));

console.log(numbersList);

//Activity 3

List 0-9

let oneToNine = [];

for(let i = 0; i <= 9; i++){
    if (i <=9){
        oneToNine.push(i);
    }
}
console.log(oneToNine);

//In Reverse

oneToNine.reverse();
console.log(oneToNine);

//Activity 4

let favFilms = ["Apocalypse Now", "The Godfather", "Ghostbusters", "Fight Club", "Inception"];

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}

if (favFilms[2] == "Ghostbusters"){
    console.log("Yay! Ghostbusters")
}
else{
    console.log("Boo! We want Ghostbusters.");
}

//Activity 5


for (let i = 0; i <= 6 ; i++){
    let randNum = Math.floor(Math.random()*30)
    if (randNum % 7 === 0){
        console.log(`${randNum} is divisible by 7`)
    }
    else{
        console.log(`${randNum} is not divisible by 7`)
    }
}

//Activity 6

let bobFollowers = ["Jim", "Joe", "Jane", "John"];
let hannahFollowers = ["Jack", "Jim", "Jen", "Jane"];
let mutualFollowers = [];

for (let i = 0; i < bobFollowers.length; i++) {
    for (let j = 0; j < hannahFollowers.length; j++) {
      if (bobFollowers[i] === hannahFollowers[j]) {
        mutualFollowers.push(bobFollowers[i]);
      }
    }
  };
  console.log(`The mutual followers are ${mutualFollowers}`)

//Activity 7




