// const inputData = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `
[![${license} License](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})
`;
  }
}

// Returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://lbesson.mit-license.org/';
  } else if (license === 'GPL') {
    return 'http://perso.crans.org/besson/LICENSE.html';
  } else if (license === 'CC0') {
    return 'https://creativecommons.org/licenses/by-nd/4.0';
  } else {
    return '';
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `
## License
This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.
`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}
## Table of Contents

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}
${renderLicenseSection(data.licenses)}
## Questions
If you have any questions, please feel free to reach me at ${data.email} or visit my GitHub profile @ https://github.com/${data.username}`;
}

module.exports = generateMarkdown;