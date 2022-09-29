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
    },
    {
        name: 'GNU GPL v3',
        link:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        name: 'MIT',
        link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        name:'Mozilla',
        link:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        name:'IBM',
        link:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    },
];
for(let i =0;i<=licenseArr.length;i++)
{
    if(licenseArr[i]==licenseIcons[i].name)
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
