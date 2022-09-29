const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/template');


inquirer
.prompt([
    {
        type: 'input',
        name:'title',
        message:'Enter project title',
        validate: titleInput =>{
            if(titleInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter title");
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'description',
        message: 'Enter a description for your project',
        validate: descInput =>{
            if(descInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter description");
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'installation',
        message: 'Write the installation guide for your program',
        validate: installInput =>{
            if(installInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter installation guide");
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'usage',
        message: 'Provide the use cases for the program',
        validate: usageInput =>{
            if(usageInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter use cases");
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'screenshot',
        message:'Enter file path of the screenshot',
        validate: screenImage =>{
            if(screenImage)
            {
                return true;
            }
            else
            {
                console.log("Please enter file path for screenshot");
                return false;
            }
        }
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
        message:'Please provide the names of contributors',
        validate: contName =>{
            if(contName)
            {
                return true;
            }
            else
            {
                console.log("Please enter names of contributors");
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'username',
        message: 'Please provide the GitHub username',
        validate: userName =>{
            if(userName)
            {
                return true;
            }
            else
            {
                console.log("Please enter GitHub username");
                return false;
            }
        }
    },

    {
        type:'input',
        name:'email',
        message:'Please add your email',
        validate: eMail =>{
            if(eMail)
            {
                return true;
            }
            else
            {
                console.log("Please enter user email");
                return false;
            }
        }
    }

])
.then(answer=>{

    const pageReadMe = generateREADME(answer);
    fs.writeFile('./dst/README.md',pageReadMe,err =>{
        if(err) throw new (err);
        console.log("Read me file complete");
    });

});