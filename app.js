const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/template');


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
        type: 'input',
        name:'screenshot',
        message:'Enter file path of the screenshot'
    },

    {
        type: 'checkbox',
        name:'license',
        message: 'Please check any license that apply',
        choices:['Apache','Boost','BSD 3','GNU GPL v3','MIT','Mozilla','IBM']
    },

    {
        type:'input',
        name:'tests',
        message:'Plase provide any tests for the program'
    },

    {
        type:'input',
        name:'contributors',
        message:'Please provide the names of contributors'
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
.then(answer=>{

    const pageReadMe = generateREADME(answer);
    fs.writeFile('./README.md',pageReadMe,err =>{
        if(err) throw new (err);
        console.log("Read me file complete");
    });

});