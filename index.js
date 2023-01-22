// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMkdn = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: '',
    // },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any devolpers you collaborated wiht on the project wiht links to their github profiles:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'enter instuction on how to run tests for you project:',
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMkdn(data), (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile('README.md', answers)
    });
};
// Function call to initialize app
init();