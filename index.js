const { generateFileContent } = require('./generateFileContent');
const { uploadToFirstS3 } = require('./s3UploadFile');
const { saveLocalFile } = require('./saveLocalFile');
const fs = require('fs');

exports.handler = async (event) => {
    // Your Lambda function logic here
  
    const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
              status: undefined,
              messages: [],
              generatedFileContent: false,
              fileLocallySaved: false,
              fileLocallyDeleted: false,
              fileUploadedToS3: false,
              logsSaved: false
            }
          )
    };

  const generatedFileContent = generateFileContent(event);
  console.log('File content generated successfully!');
  response.generatedFileContent = true;

  saveLocalFile(generatedFileContent);
  response.fileLocallySaved = true;
  console.log('File saved locally successfully!');


  await uploadToFirstS3(generatedFileContent);
  response.fileUploadedToS3 = true;
  console.log('File uploaded to S3 Bucket successfully!');

  const tmpDirectory = '/tmp';
  const temporaryFilePath = `${tmpDirectory}/request.txt`;
  fs.unlinkSync(temporaryFilePath);
  response.fileLocallyDeleted = true;
  console.log(`File deleted from ${temporaryFilePath}`);
  
  return response;
};