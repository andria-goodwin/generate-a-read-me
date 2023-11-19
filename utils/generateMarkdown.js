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

// Returns the license link depending on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://mit-license.org/`
  } else if (license === 'GPL') {
      return `https://www.gnu.org/licenses/gpl-3.0-standalone.html`
  } else if (license === 'CC0') {
      return `https://creativecommons.org/licenses/by-sa/4.0/legalcode`
  } else if (license === 'APACHE_2.0') {
      return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === 'ISC') {
      return `https://www.isc.org/licenses/`
  }
}

// Returns the license section of READ ME file
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


// function to generate markdown for the READ ME file
function generateMarkdown(data) {
  
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}
${renderLicenseSection(data.licenses)}
## Questions
If you have any questions, please feel free to reach me at ${data.email} or visit my GitHub profile @ https://github.com/${data.username}`;
}

module.exports = generateMarkdown;