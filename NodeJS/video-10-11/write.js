const fs = require('node:fs');

const writeInFile = (name) => {

    fs.writeFile('message.txt', `Hello ${name} !!!!!`, (err) => {
        console.log(" ");
    });
}

writeInFile('Pratikkkk');