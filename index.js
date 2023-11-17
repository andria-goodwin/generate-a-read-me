// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const gm = require('./utils/generateMarkdown.js');

const validateInput = (input, message) => {
    if (input) return true;
    else {
        console.log(message)
        return false;
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?',
        validate: username => validateInput(username, "Please provide your user name.")
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
        validate: email => validateInput(email, "Please add your e-mail.")
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: title => validateInput(title, "Please add your title.")
    },
    {
        type: 'input',
        name: 'description',
        message: `Describe your project by answering the following questions:
What was your motivation?
Why did you build this project?
What problem does it solve?
What did you learn?`,
        validate: description => validateInput(description, "Please add your description.")
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installation => validateInput(installation, "Please add your installation instructions or at least a link to the app.")
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
        validate: usage => validateInput(usage, "Please add your usage instructions.")
    },
    {
        type: 'input',
        name: 'contributing',
        message: `Who contributed to this project? Don't forget to include their GitHub usernames.`
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How did you test the application?',
        validate: tests => validateInput(tests, "Please add your testing process.")
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC0'],
        when: ({ confirmLicenses }) => confirmLicenses
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

