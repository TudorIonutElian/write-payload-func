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
      body: JSON.stringify({
      message: JSON.stringify(event),
      // Add more data as needed
    })
  };

  const generatedFileContent = generateFileContent(event);
  saveLocalFile(generatedFileContent);

  await uploadToFirstS3(generatedFileContent);
  console.log('File uploaded to S3 Bucket successfully!');

  const tmpDirectory = '/tmp';
  const temporaryFilePath = `${tmpDirectory}/request.txt`;
  fs.unlinkSync(temporaryFilePath);

  console.log(`File deleted from ${temporaryFilePath}`);
  
  return response;
};