const fs = require('fs');

//This function takes the data for the readme and generates the actual file
const writeFile = fileContent =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/README.md',fileContent, err =>{
            if(err)
            {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

module.exports = {writeFile:writeFile};