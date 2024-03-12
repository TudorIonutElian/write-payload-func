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
        body: {
            status: undefined,
            messages: [],
            generatedFileContent: false,
            fileLocallySaved: false,
            fileLocallyDeleted: false,
            fileUploadedToS3: false,
            logsSaved: false
          }

    };

  const generatedFileContent = generateFileContent(event);
  console.log('File content generated successfully!');
  response.body.generatedFileContent = true;
  response.body.messages.push(`File content generated successfully at ${new Date().toISOString()}`);

  saveLocalFile(generatedFileContent);
  response.body.fileLocallySaved = true;
  response.body.messages.push(`File saved locally at ${new Date().toISOString()}`);
  console.log('File saved locally successfully!');


  await uploadToFirstS3(generatedFileContent);
  response.body.fileUploadedToS3 = true;
  response.body.logsSaved = true;
  response.body.messages.push(`File uploaded to S3 Bucket at ${new Date().toISOString()}`);
  response.body.messages.push(`Logs saved at ${new Date().toISOString()}`);
  console.log('File uploaded to S3 Bucket successfully!');

  const tmpDirectory = '/tmp';
  const temporaryFilePath = `${tmpDirectory}/request.txt`;
  fs.unlinkSync(temporaryFilePath);
  response.body.fileLocallyDeleted = true;
  response.body.messages.push(`File deleted from ${temporaryFilePath} at ${new Date().toISOString()}`);
  console.log(`File deleted from ${temporaryFilePath}`);
  
  return response;
};