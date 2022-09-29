/*const fs = require('fs');
const generateREADME = require('./src/template');

fs.writeFile('./README.MD',generateREADME(),err =>{
    if(err) throw new (err);
    console.log("Read me file complete");
});*/

const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name:'title',
        message:'Enter project title'
    },

    {
        type: 'input',
        name:'description',
        message: 'Enter a description for your project'
    },

    {
        type: 'input',
        name:'installation',
        message: 'Write the installation guide for your program'
    },

    {
        type: 'input',
        name:'usage',
        message: 'Provide the use cases for the program'
    },

    {
        type: 'checkbox',
        name:'license',
        message: 'Please check any license that apply',
        choices:['Apache','MIT','GNU','ISC']
    },

    {
        type:'input',
        name:'tests',
        message:'Plase provide any tests for the program'
    },

    {
        type: 'input',
        name:'username',
        message: 'Please provide the GitHub username'
    },

    {
        type:'input',
        name:'email',
        message:'Please add your email'
    }

])
.then(answer=>console.log(answer));