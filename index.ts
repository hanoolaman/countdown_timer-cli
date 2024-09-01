#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let userInput = await inquirer.prompt({
    type:"number",
    name:"seconds",
    message:"Enter Countdown duration in seconds:",
    validate: (input: number) => {
        if (isNaN(Number(input))) {
            return "Please enter a valid number.";
        } else if (input <= 0) {
            return "Please enter a number greater than 0.";
        } else if (input > 60) {
            return "Seconds must be 60 or less.";
        } else {
            return true;
        }
    }
});

let {seconds}= userInput;

if(seconds !=0){
    console.log(`Starting countdown for ${seconds} seconds...`);
    startCountdownFun(seconds);
}else{
    console.log("Please enter a number greater than 0");
    
}

function startCountdownFun(seconds:number){
    const currentTime = Date.now();

let userEnteredTime = seconds * 1000

let totalTime = currentTime + userEnteredTime;

const timer = setInterval(() => {
    let currentTime = Date.now();
 const remainingTime = totalTime - currentTime   

 if(remainingTime >=0){
    process.stdout.write(`\rTime remaining: ${chalk.bold.yellow(Math.floor(remainingTime/1000))} seconds`)
}else{   
    clearInterval(timer);
    console.log(`\nTime's Up!`);
    console.log(`Thank you for using Countdown Timer App!`);
}
}, 1000)
}