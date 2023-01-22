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
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
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
        writeToFile('README3.md', answers)
    });
};
// Function call to initialize app
init();