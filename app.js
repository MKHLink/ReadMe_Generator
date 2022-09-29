const fs = require('fs');
const generateREADME = require('./src/template');

fs.writeFile('./README.MD',generateREADME(),err =>{
    if(err) throw new (err);
    console.log("Read me file complete");
});