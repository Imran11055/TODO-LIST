#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.bgGreenBright("For Daily use App where you can store your plans"));
let todos = [];
let condition  = true;

while(condition)
{
let addTask =await  inquirer.prompt([{
    name:"todo",
    type:"input",
    message: "what you want to add in your Todos",
},
{
    name: "addmore",
    type: "confirm",
    message:"Do you want to add more?",
    default: "false",
},


]
);
todos.push(addTask.todo);
condition = addTask.addmore
console.log(todos)
}
let removeTdoo = await inquirer.prompt (
    [
        {
            name: "todo",
            message: "Do you want to remove any item from list",
            type: "number",

        }
    ]
);
todos.splice(removeTdoo.todo,1);
console.log (chalk.bgGray(`Yours Final Todo List is ${todos}`));
