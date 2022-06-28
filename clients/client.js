// 
//  client.js
//  ~/clients/
// 
//  created:    2022-06-24
// 
//  client object
// 
'use strict';
// const log = require('../log'); 
// const config = require('../config'); 
// const framework = require('../framework'); 

const fn = {
  saveClientToFile: require('./fn/save-client-to-file')
};

const getClient = () => {

//  const obj = {}

    return {
        
        primaryID: 'unknown-client'
        
        , getTags: function() { return this._tags; }
        , setTags: function(data) { this._tags = data; }
        , _tags: ['default','tags']

        , filePath: '(unknown-file-path)'
        , saveToFile: function(path) { fn.saveClientToFile(this, this.filePath); }

        , toString: function() { return this.primaryID; }
    };
};

module.exports = {
  getObj: getClient
};
