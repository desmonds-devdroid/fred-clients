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
  files.forEach(f => {
    const filepath = path.join(dirpath, f);
    const obj = require('./load-client').loadClient(filepath);
    rv.push(obj);
  });
    
  // return the objects
  return rv;

};

module.exports = {
  getClients: getClients
};
