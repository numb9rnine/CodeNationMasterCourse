//Lesson Work and Notes

// const pressGrindBeans = ()=> {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = ( ) => {
//     if (coffeeIsGrinding)
// {
//     console.log("Stopping the grind..");
//     coffeeIsGrinding = true;
// }   }

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal(300, accnumber);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp (7,3);
// console.log(addUp(2,5));


//Activity 1

const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));


//Activity 2

let orderCount = 0; 

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1}, ${topping2}`);
    orderCount++;

}
takeOrder("Mushroom", "Green Pepper");
console.log(orderCount)
takeOrder("Ham", "Pineapple")
console.log(orderCount);

//Activity 3

pinNum = 1234
accNum = 14235867

accBalance = 1000

const cashMachine = (amount,pinNum) => {
    if( amount > 0 && amount <= accBalance && pinNum === 1234){
        console.log(`You have withdrawn £${amount} from Account:${accNum}`)
        let remainingAmm = accBalance - amount;
        console.log(`Your remaining balance is: £${remainingAmm}`)
    }else {
        console.log("Incorrect Pin. Please Try again");

    }
}
cashMachine(100,pinNum);
