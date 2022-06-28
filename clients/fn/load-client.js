// 
//  load-client.js
//  ~/clients/fn/
// 
//  created:    2022-06-24
// 
//  supporting code
//  load client object from file
// 
'use strict';
const log = require('../../log'); 
const config = require('../../config'); 
const framework = require('../../framework'); 

const loadClient = (pathToFile) => {

  const os = require('os');
  const client = require('../').client;
  
  // read file rows
  const filecontent = framework.filesystem.readFile(pathToFile);
  const filetags = filecontent.split(os.EOL);
  
  // create client object and squirt data into it
  const obj = client.getObj();
  obj.filePath = pathToFile;
  obj.setTags(filetags);
  if (filetags.length > 0) {
    obj.primaryID = filetags[0];
  } else {
    obj.primaryID = '(no data!)';
  }
  
  // return it
  return obj;
};

module.exports = {
  loadClient: loadClient
};
