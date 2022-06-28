// 
//  find-clients.js
//  ~/clients/fn/
// 
//  created:    2022-06-25
// 
//  clientsDb.findClients()
//  function code
// 
'use strict';
const log = require('../../log');
const config = require('../../config');
const framework = require('../../framework');

const fn = require('./get-clients');

const findClients = (data) => {
  // default return empty list
  const rv = [];

  // massage search terms
  if (data) {

    const terms = [];
    terms.push(...data);   // if data is just a string, add it, otherwise add all

    // load all clients
    const all_clients = fn.getClients();

    // find matches
    const matches = [];
    all_clients.forEach(cli => {
      let match = false;
      const tags = cli.getTags();
      tags.forEach(t => {
        if (!match) {
          
          // case-insensitive, ignore whitespace
          const tag = t.toString().trim().toLowerCase();
          terms.forEach(st => {
            if (!match) {
              // case-insensitive, ignore whitespace
              const term = st.toString().trim().toLowerCase();

              // basic contains search
              if (tag.includes(term)) {
                matches.push(cli);
                match = true;
              }
            }
          });
        }
      });
    });
    
    // return the matched clients
    rv.push(...matches);
  }

  return rv;

};

module.exports = {
  findClients: findClients
};
