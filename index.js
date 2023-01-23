
const inquirer = require('inquirer');
const fs = require('fs');
const genMkdn = require('./utils/generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter the description for you project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter you projects usage instructions and examples:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license?',
        choices: ["MIT", "GPLv2", "Apache", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3", "none"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any devolpers you collaborated wiht on the project wiht links to their github profiles:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'enter instuctions on how to run tests for you project:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'what do you want to name your file?',
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMkdn(data), (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};


function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile(answers.fileName, answers)
    });
};
// Function call to initialize app
init();