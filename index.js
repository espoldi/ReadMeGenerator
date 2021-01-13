// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// An array of questions for user input
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
        type: 'rawlist',
        name: 'license',
        message: 'Which license applies?',
        choices: [
            'MIT', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'Boost License 1.0', 
            'Eclipse Public License 1.0', 
            'Creative Commons', 
            'Unlicense', 
            'none'],
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

const promptUser = () => {return inquirer.prompt(questions)};

// Function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data);
    console.log("test successful");
}

// Function to initialize app
const init = async () => {
    const answers = await promptUser();
    const markdown = await generateMarkdown(answers);
    const html = writeToFile('README.md', markdown);
}

// Function call to initialize app
init();
