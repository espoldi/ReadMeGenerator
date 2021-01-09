// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please briefly describe this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project meant to be used for?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license applies?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who and what were contributing people and/or technologies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any tests available for this project?',
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
