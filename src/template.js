module.exports = fileData =>{
    console.log(fileData);

    const{title, description, installation, usage, license, contributors, tests, username, email} = fileData;
    
    return `
# Title
${title}
# Table of Contents
        
## Description
${description}
## Installation
${installation}
## Usage
${usage}
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
