const fs = require('fs');

const writeFile = pageData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageData, err => {
            if (err) {
               reject(err);
               return; 
            }

            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: 'Styles added. Check /dist for your finished project!'
            });
        });
    });
};

module.exports = { writeFile, copyFile }