module.exports = fileData =>{
    console.log(fileData);

    const{title, description, installation, usage, screenshot, license, contributors, tests, username, email} = fileData;
    
    return `
# Title
${title}

# Table of Contents
[Description](#description)

[Installation](#instalation)

[Usage](#usage)

[License](#license)

[Contributors](#contributors)

[Tests](#tests)

[Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

![alt text](./${screenshot})

## License
${license}

## Contribution
${contributors}

## Tests
${tests}

## Questions
GitHub: ${username}

Email: ${email}
    `;
};
