// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/License-${encodeURI(
      license
    )}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "Apache License 2.0") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GNU Affero General Public License v2.0") {
    return `https://choosealicense.com/licenses/agpl-3.0/`;
  } else if (license === "GNU General Public License v3.0") {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license === "GNU Lesser General Public License v2.1") {
    return `https://choosealicense.com/licenses/lgpl-3.0/`;
  } else if (license === "Mozilla Public License 2.0") {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === "Boost Software License 1.0") {
    return `https://choosealicense.com/licenses/bsl-1.0/`;
  } else if (license === "The Unlicense") {
    return `https://choosealicense.com/licenses/unlicense/`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
## [License](#table-of-contents)
        
The application is covered under the following license:
        
${renderLicenseLink(license)}
`;
  } else {
    return "";
  }
}

function RenderLicenseToC(license) {
  if (license !== "no license") {
    return `* [License](#License)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table-of-Contents

* [Description](#description)
* [Screenshots](#screenshots)
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
${RenderLicenseToC(data.license)}
* [Contributions](#contributions)
* [Tests](#tests)
* [Links](#links)
* [Credits](#credits)
* [Questions](#questions)
  
## [Description](#table-of-contents)

${data.description}

## [Screenshots](#table-of-contents)

(add screenshot links here)

## [Demonstration](#table-of-contents)
  
(add demonstration video here)

## [Installation](#table-of-contents)

${data.installation}

## [Usage](#table-of-contents)

${data.usage}

${renderLicenseSection(data.license)}

## [Contributions](#table-of-contents)

${data.contributions}

## [Tests](#table-of-contents)

${data.tests}

## [Links](#table-of-contents)

${data.page}

## [Credits](#table-of-contents)

${data.credits}

## [Questions](#table-of-contents)

Please contact me with any questions using the following links:

Github: https://github.com/${data.ghUsername}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
