// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your application and dependencies if applicable.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is affiliated with your project?',
        choices: [
            {
                name: 'MIT License',
                value: {
                    name: 'MIT License',
                    link: 'https://choosealicense.com/licenses/mit/'
                }
            },
            {
                name: 'GNU General Public License (GPL)',
                value: {
                    name: 'GNU General Public License (GPL)',
                    link: 'https://choosealicense.com/licenses/gpl-3.0/'
                }
            },
            {
                name: 'Apache License 2.0',
                value: {
                    name: 'Apache License 2.0',
                    link: 'https://choosealicense.com/licenses/apache-2.0/'
                }
            },
            {
                name: 'Unlicense',
                value: {
                    name: 'Unlicense',
                    link: 'https://choosealicense.com/licenses/unlicense/'
                }
            }
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include a guideline for how other devs can contribute to your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Do you have ways for users to test your application, if so, how can they do it?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Whats is your email?'
    }
];

let generateREADME = function(data) {
    return `
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Test](#test)
- [Questions](#questions)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## License
    
${data.license.name}
    
## Contributing
    
${data.contributing}
    
## Test
    
${data.test}
    
## Questions
    
My Github account is [GitHub.com/${data.githubUsername}](github.com/${data.githubUsername})
    
If you wish to contact me you can do so at ${data.email}
    `
};

// TODO: Create a function to write README file
let writeToFile = function(content) {
    fs.writeFile('README.md', content, (err) => {
        err ? console.log(err) : console.log('Professional README Created!')
    })
}

// TODO: Create a function to initialize app
let init = function() {
    inquirer.prompt(questions)
        .then((data) => {
            const READMEContent = generateREADME(data);
            writeToFile(READMEContent);
        })
        .catch((error) => console.log(error));
};

// Function call to initialize app
init();
