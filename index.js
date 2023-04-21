//imports inpuirer node module
const inquirer = require('inquirer');
//imports fs
const fs = require('fs');
//imports code from gnerate markdown js file
const genMkdn = require('./utils/generateMarkdown');
//array of questions for inquirer
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
        message: 'List any devolpers you collaborated with on the project with links to their github profiles:',
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

//writes read me file with the user input to a file
function writeToFile(fileName, data) {
    //genMkdn calls function from the generatemarkdown.js file
    fs.writeFile(fileName, genMkdn(data), (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};

//runs inquirer
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile(`${answers.fileName}.md`, answers)
    });
};
// Function call to initialize app
init();