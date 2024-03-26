#! /usr/bin/env node
import inquirer from "inquirer";
const  randomNumber = Math.floor (Math.random()*6+1);
console.log("WELCOME TO MY NUMBER GUESSING GAME");
const answers = await inquirer.prompt([
{
    name:"userGuessesNumber",
    type:"number",
    message:"GUESS A NUMBER  BETWEEN 1-6 :",

}
]);
if (answers.userGuessesNumber=== randomNumber){
    console.log("CONGRATS! YOU GUESSED RIGHT" );
}
else{
    console.log("YOU GUESSES WRONG TRY AGAIN");
}