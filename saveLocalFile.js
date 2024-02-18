const fs = require('fs');
const path = require('path');

const saveLocalFile = (fileContent) => {
    const tmpDirectory = '/tmp';
    const temporaryFilePath = `${tmpDirectory}/example.txt`;
    fs.writeFileSync(temporaryFilePath, fileContent);
}

module.exports = {
    saveLocalFile
};