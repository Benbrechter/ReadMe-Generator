// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'No License'){
     return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'No License'){
        return `- [License](#license)`
    }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'No License'){
        return `## License \n This project is licensed under the ${license}.`
    }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contributing Guidelines](#contributing-guidelines)
  ${renderLicenseLink(data.License)}
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage Information
  ${data.Usage}

  ## Contributing guidelines
  ${data.Contributing}

  ${renderLicenseSection(data.License)}

  ## Test Instructions
  ${data.Test}

  ## Questions
  If you have any questions, you can email me at ${data.Email} \n
  If you want to see more of my work you can visit my Github at [${data.GitHub}](https://github.com/${data.GitH44523ub})



`;
}

module.exports = generateMarkdown;
