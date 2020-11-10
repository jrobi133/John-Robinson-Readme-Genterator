// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
// const until = require('until');

// const questions = [

// ];

inquirer.prompt([
    {
        type: 'input',
        name: 'gitHub',
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
]).then(response => {
    console.log('response', response);
    const md = `
# ${response.projectName}

## Description:
    
    ${response.description}
    
    
## Table of Contents:
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation
    
To install necessary dependencies, run the following command:
    
    ${response.installCommand}
    
    
    
## Usage
    
    ${response.userNeedToKnow}
    
    
## License
    
This project is licensed under ${response.license} license.
    
## Contributing 
    
    ${response.userContributing}
    
    
## Tests
    
To run test, run the following command:
    
    ${response.runCommand}
    
    
## Questions 
    
If you have any question about the repo, open an issue or contact me directly at \n${response.emailAddress}. You can find more of my work at on gitHub at :\nhttps://github.com/${response.gitHub}`;

    fs.writeFile('README.md', md, (err) => {
        console.log('Success!')
    });
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
