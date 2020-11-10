
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Github username?',
        validate: (gitHubNameInput) => {
            if (gitHubNameInput) {
                return true;
            } else {
                console.log("Enter your Github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is youre email address?',
        validate: (userEmailAddress) => {
            if (userEmailAddress) {
                return true;
            } else {
                console.log("Enter your email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'what is your projects name?',
        validate: (userProjectName) => {
            if (userProjectName) {
                return true;
            } else {
                console.log("Enter your projects name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: (userDescription) => {
            if (userDescription) {
                return true;
            } else {
                console.log("Your description should be longer then that!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of License should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'runCommand',
        message: 'What command should be run to run tests?',
        default: function () {
            return 'npm test';
          },
    },
    {
        type: 'input',
        name: 'userNeedToKnow',
        message: 'What does the user need to know about using the repo?',
        validate: (whatUserNeedsToKnow) => {
            if (whatUserNeedsToKnow) {
                return true;
            } else {
                console.log("The User needs to know more then that!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userContributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: (userContribute) => {
            if (userContribute) {
                return true;
            } else {
                console.log("Please enter what the user needs to know!");
                return false;
            }
        }
    },
]).then(response => {
    // console.log('response', response);
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
    
If you have any question about the repo, open an issue or contact me directly at \n${response.emailAddress}. You can find more of my work on my gitHub at :\nhttps://github.com/${response.gitHub}`;

    fs.writeFile('README.md', md, (err) => {
        console.log('Success!')
    });
});


