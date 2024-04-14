#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "SecondNumber" },
    {
        message: "Select an operator to perform the operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

if (answer.operator === "Addition") {
    console.log(`Result: ${answer.FirstNumber + answer.SecondNumber}`);
} else if (answer.operator === "Subtraction") {
    console.log(`Result: ${answer.FirstNumber - answer.SecondNumber}`);
} else if (answer.operator === "Multiplication") {
    console.log(`Result: ${answer.FirstNumber * answer.SecondNumber}`);
} else if (answer.operator === "Division") {
    console.log(`Result: ${answer.FirstNumber / answer.SecondNumber}`);
} else {
    console.log("Invalid Operator");
}
