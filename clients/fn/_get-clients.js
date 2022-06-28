//
//  get-clients.js
//  ~/clients/fn/
//
//  created:    2022-06-24
//
//  clientsDb.getClients()
//  function code
//
'use strict';
const log = require('../../log'); 
const config = require('../../config'); 
const framework = require('../../framework'); 

const getClients = () => {

  // load text files names list
  const dirpath = config.clients.clients_dir_path;
  const files = framework.filesystem.readDir(dirpath);

  // load each file and turn it into an object
  const rv = [];
  const path = require('path');
  const os = require('os');
  const client = require('../').client;
  files.forEach(f => {
    
    // read file rows
    const filepath = path.join(dirpath, f);
    const filecontent = framework.filesystem.readFile(filepath);
    const filetags = filecontent.split(os.EOL);
    
    // create client object and squirt data into it
    const obj = client.getObj();
    obj.filePath = filepath;
    obj.setTags(filetags);
    if (filetags.length > 0) {
      obj.primaryID = filetags[0];
    } else {
      obj.primaryID = '(no data!)';
    }
    
    // add client object to output list
    rv.push(obj);
  });

  // return the objects
  return rv;

};

module.exports = {
  getClients: getClients
};
