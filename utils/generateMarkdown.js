// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';

    case 'Mozilla Public License 2.0':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';

    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';

    case 'Boost License 1.0':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';

    case 'Eclipse Public License 1.0':
      return 'https://img.shields.io/badge/License-EPL%201.0-red.svg';

    case 'Creative Commons':
      return 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg';

    case 'Unlicense':
      return 'https://img.shields.io/badge/license-Unlicense-blue.svg';

    case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';

    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';

    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';

    case 'Boost License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';

    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';

    case 'Creative Commons':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';

    case 'Unlicense':
      return 'http://unlicense.org/';

    case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is protected under ${data.license}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);
  return `# ${data.projectTitle}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License) [![License](${badge})](${link})
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description

${data.description}

## Installation

    ${data.installation}

## Usage

${data.usage}

## License

${section}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Contact Me at

Github: https://www.github.com/${data.user}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
