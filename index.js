//to do; include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");


//to do; create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to give your project?",
        choices: ["MIT", "Apache License 2.0", "ISC License", "none"]
    },
];

//to do; create function to write README file
function writeToFile(fileName, data) {
    
}
//to do; create a function to intialize app
function init() {
  inquirer.prompt(questions).then(data => generateMarkdown(data))  
  //by the time you generate markdown file finished you need to change that to writeToFile("README.md", generateMarkdown(data))
}

//call function to initialize app
init();