// 
//  read-dir.js
//  ~/framework/filesystem/
// 
//  created:    2022-06-24
// 
//  directory reader
// 
'use strict';

const log = require('../../log');
const config = require('../../config-root');

const fs = require('fs');

const readDir = pathToDir => {
    const checker = require('./checkexists-dir');
    let rv = [];
    if (checker(pathToDir)) {
        // get file list and turn csv into array
        const list = fs.readdirSync(
                        pathToDir
                        , config.root.framework.filesystem.ENCODING_DEFAULT
                        )
                        .toString();
        rv = list.split(/,/);
    }   
    return rv;
};

module.exports = readDir;
