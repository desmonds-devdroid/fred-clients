// 
//  save-client-to-file.js
//  ~/clients/fn/
// 
//  created:    2022-06-25
// 
//  client.saveToFile()
//  function code
// 
'use strict';
const log = require('../../log');
const config = require('../../config');
const framework = require('../../framework');

const saveClientToFile = (data, pathToFile) => {
  console.log(`TODO: saveClientToFile(), to: ${pathToFile}`);
  
  if (data) {
    if (!pathToFile && data.filePath) pathToFile = data.filePath;

  }
  /*
    - Client file names
    - duplicates should never arise, by nature of the business, but just in case
      (and for the sake of human readability in the file system)
    - client files named by primaryId
    - before saving, a check for that file 
      - if it exists, add a '2' on the end
        - if that exists, add a '3' instead
        - etc until a free name is found
  */
};

module.exports = {
  saveClientToFile: saveClientToFile
};
