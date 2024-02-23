const inquirer = require('inquirer');
const fs = require('fs');

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
        name: "Description",
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
    }
])
.then((data) => {
    const fileText = JSON.stringify(data)
fs.writeFile('README.md', fileText, (err) => 
 err ? console.log(err) : console.log('Success!'))

})