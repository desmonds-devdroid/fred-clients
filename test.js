//
//  test.js
//  ~/
// 
//  created:    2022-06-21
// 
//  Tests for Fred's Clients Limb
// 
'use strict';
const log = require('./log'); 
const config = require('./config'); 
const framework = require('./framework'); 

const fn = (data) => {
    
    const db = require('./clients/clientsDb').clientsDb;
    const rv 
        // = db.getClients();
        = db.findClients(data);

    console.log('listing...');
    rv.forEach(o => {
        console.log(o);
    });
    console.log('...done.');

    return rv;
};


let terms = [];
if (process.argv.length > 2) terms.push(...process.argv.slice(2));


let r = fn(terms);
log.log(
    `result len: ${r.length}
    \n
    result elements: ${r}`
    , log.levels.Information
);
