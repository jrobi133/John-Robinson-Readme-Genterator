// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
// const until = require('until');

// const questions = [

// ];

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is youre email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'what is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of License should your project have?',
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'runCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'userNeedToKnow',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'userContributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
])

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
