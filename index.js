const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project",
        name: "description",
    },
    {
        type: "input",
        messasge: "What are the installations instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter the Usage Information",
        name: "Usage",
    },
    {
        type: "input",
        message: "Enter the contribution guidelines",
        name: "Contributing",
    },
    {
        type: "input",
        message: "What are the test instructions",
        name: "Test",
    },
    {
        type: "input",
        message: "Please enter your Github Username",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Please enter your Email",
        name: "Email",
    },
    {
        type: "list",
        message: "Please choose a license",
        name: "License",
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'No License' ],
    }
])
.then((data) => {
    const fileText = generateMarkdown(data)
fs.writeFile('dist/README.md', fileText, (err) => 
 err ? console.log(err) : console.log('Success!'))

})