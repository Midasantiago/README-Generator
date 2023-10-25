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
        message: 'Provide instrcutions for use'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
