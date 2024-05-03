#! /usr/bin/env node
import inquirer from "inquirer";
// 1.computer will generate a number.Done
// 2.user input for gusseing number.Done
// 3.compare user input with computer generated number and show results
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to numbers guessing game"),
    console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("you guessed the wrong number");
}
;
