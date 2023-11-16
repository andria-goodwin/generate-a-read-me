// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const gm = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
];

// function to write README file
const writeToFile = data => {
    // TODO: Create a function to write README file
    fs.writeFile('./new/README.md', data, (err) =>
    err ? console.log(err) : console.log(`Success! You can find your generated READ ME in the "new" folder.`)
    );
}


// TODO: Create a function to initialize app
const init = () => {
    console.log(`Welcome to the professional READ ME generator!
Please answer the following questions to generate your READ ME.
Remember that your READ ME will reflect exactly what you enter,
so it will be case sensitive and show your punctuation.`);

    return inquirer.prompt(questions);
}

// Function call to initialize app
init()

.then(input => {
    return gm(input);
})

.then(readMe => {
    return writeToFile(readMe);
})

.catch(err => {
    console.log(err);
})

