#! /usr/bin/env node
// Add the "Inquirer & Chalk" module, which is a command line interface for node.js.
import inquirer from "inquirer";
import chalk from "chalk";
//Declare a constant "words_counterTotal word count for your sentence is" and assign it to the result of the inquirer. prompt function
const Words_counter = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "For counting the word, enter a sentence: ",
    }]);
const words = Words_counter.sentence.trim().split(" ");
console.log(chalk.green("Your sentence is here : ", words));
console.log(chalk.yellowBright("Total word_count for your sentence is : ", words.length));
