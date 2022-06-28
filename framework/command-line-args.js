// 
//  command-line-args.js
//  ~/framework/
// 
//  created:    2021-07-19
// 
//  get command line args (cli)
// 
'use strict';

const getArgsArray = (origArray = false) => {
    if (origArray) {
      return process.argv;
    } else {
      return process.argv.slice(2);
    }
};

module.exports = {
  getArgsArray: getArgsArray,
};
