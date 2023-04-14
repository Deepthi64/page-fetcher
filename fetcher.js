const request = require('request');
const fs = require('fs');

const url = 'http://www.example.edu/';
const localPath = './index.html';

request(url, function(error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode} - ${response.statusMessage}`);
  } else {
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error(err);
      } else {
        const fileSize = fs.statSync(localPath).size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
      }
    });
  }
});
