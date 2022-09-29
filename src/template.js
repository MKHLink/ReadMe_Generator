const licenseIcons = licenseArr =>{
let tempArr=[];
const licenseIcons = [
    {
        name:'Apache',
        link: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        name: 'Boost',
        link:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    },
    {
        name: 'BSD 3',
        link:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
];
for(let i =0;i<=licenseArr.length;i++)
{
    if(licenseArr[i]===licenseIcons[i].name)
    {
        tempArr.push(licenseIcons[i].link);
    }
}

console.log(tempArr);
return tempArr;

};




module.exports = fileData =>{
    console.log(fileData);

    const{title, description, installation, usage, screenshot, license, contributors, tests, username, email} = fileData;
    
    return `

${licenseIcons(license)}
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
