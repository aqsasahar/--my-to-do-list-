import inquirer from "inquirer";
import chalk from "chalk";
//#!/usr/bin/env node

let todolist=[];
let conditions =true;

console.log(chalk.red.bold("\n\twell come to my todo list\n"));
while(conditions){
    let addTask=await inquirer.prompt([
        {
          name:"task",
          type: "input",
          message:chalk.green.bold("Enter your new task"),
    }
    ]);
    todolist.push(addTask.task);
    console.log (`${addTask.task}Ttask add in Todo_list succesfully`)
    let addMoreTask = await inquirer.prompt([
        {

            name:"addmore",
            type:"confirm",
            message:chalk.yellow.bold("Do you want to add more task"),
    }
    ]);
    conditions =addMoreTask.addmore
     }
     console.log("your update Todo-list",todolist);
     