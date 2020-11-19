
# Readme Generator
![License](https://img.shields.io/badge/Website-Portfolio-green?link=https://jrobi133.github.io/PortfolioJohnRobinson/index.html)

## Description:
    
This project helps your create a readme on the fly. By inputting a few commands you will have your own readme generated just for you. To watch a walkthrough video of this application click this link : https://drive.google.com/file/d/1GIXvspM51fP58Z1SkRhGpMOFoim5BAbZ/view
    
    
## Table of Contents:
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation
    
To install necessary dependencies, run the following command:
    
    npm i
    
    
    
## Usage
    
    By using this file in the terminal type node index.js to prompt the questions.
    
    
## License
    
This project is licensed under None license.
    
## Contributing 
    
    Any contribution is greatly appreciated.
    
    
## Tests
    
To run test, run the following command:
    
    npm test
    
    
## Questions 
    
If you have any question about the repo, open an issue or contact me directly at 
johnarobinson133@gmail.com. You can find more of my work on my gitHub at :
https://github.com/jrobi133






![](/assets/screenshot.PNG)


.then((response) => {
    console.log("Answers", response)
    switch(response.license){
        case "Apache 2.0":
        license.link1 = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
        license.link2 = "https://opensource.org/licenses/Apache-2.0"
        license.summary = "Apache License\nVersion 2.0, January 2004\nhttp://www.apache.org/licenses/"
        break;
        case "MIT":
            license.link1 = 'https://img.shields.io/badge/License-MIT-yellow.svg'
            license.link2 = 'https://opensource.org/licenses/MIT'
            license.summary = 'MIT License\nOpen Source Inititive\nhttps://opensource.org/licenses/MIT'
        break;
        case 'GNU GPL v3.0':
            license.link1 = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
            license.link2 = 'https://www.gnu.org/licenses/gpl-3.0'
            license.summary = 'GNU General Public License\nVersion 3.0, June 2007\nhttps://www.gnu.org/licenses/gpl-3.0'
        break;
    }
 const readData =
`# ${response.title}
[![License](${license.link1})](${license.link2})
## Description
${response.description}
## Table of Contents


