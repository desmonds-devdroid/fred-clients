// 
//  clientsDb.js
//  ~/clients/
// 
//  created:    2022-06-24
// 
//  clients database 
// 
'use strict';
const log = require('../log'); 
const config = require('../config'); 
const framework = require('../framework'); 

const getClientsDb = () => {
    return {
        //   getClients: fn.getClients
        // , setClients: fn.setClients
        // , saveClient: fn.saveClient
        // , findClients: fn.findClients
          getClients: require('./fn/get-clients').getClients
        , setClients: require('./fn/set-clients').setClients
        , saveClient: require('./fn/save-client').saveClient
        , findClients: require('./fn/find-clients').findClients
    };
};

module.exports = {
  clientsDb: getClientsDb()
};