const fs = require('fs');

const saveLocalFile = (fileContent) => {
    const tmpDirectory = '/tmp';
    const temporaryFilePath = `${tmpDirectory}/request.txt`;
    fs.writeFileSync(temporaryFilePath, fileContent);
    console.log(`File saved to ${temporaryFilePath}`);
}

module.exports = {
    saveLocalFile
};