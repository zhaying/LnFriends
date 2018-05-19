//Load custom Services 
var coinDataService       = require("../services/coinDataService.js"),
    rigDataService        = require("../services/rigDataService.js"),
    investorDataService   = require("../services/investorDataService.js"),
    walletDataService     = require("../services/walletDataService.js"),
    miningPoolDataService = require("../services/miningPoolDataService.js");

module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required
    socket.on('listingRequest', function() {
        console.log('console.log.listingRequest');
        coinDataService.getListings();
    });
    socket.on('coinRequest', function(data) {
        console.log('console.log.coinRequest',data);
        coinDataService.getLatestPrice(data);
    });
    socket.on('getCurrencies', function() {
        console.log('console.log.getCurrencies');
        coinDataService.getTheCurrencies();
    });
    socket.on('getMiningPoolTotal', function(data) {
        console.log('console.log.getMiningPoolTotal',data);
        coinDataService.getMiningPoolTotal(data);
    });
    socket.on('btnAddWallet', function(data) {
        console.log('console.log.btnAddWallet', data);
        coinDataService.addWallet(data);
    });

    //rigs
    socket.on('addingARig', function(data) {
        console.log('console.log.addingARig', data);
        rigDataService.addRig(data);
    });
    socket.on('getListOfRigs', function() {
        console.log('console.log.getListOfRigs');
        rigDataService.getRigs();
    });
    socket.on('rigDataServiceResponse', function(data) {
        console.log('console.log.rigDataServiceResponse:',data);

    });

    //investors
    socket.on('addingAnInvestor', function(data) {
        console.log('console.log.addingAnInvestor', data);
        investorDataService.addInvestor(data);
    });
    socket.on('getListOfInvestors', function() {
        console.log('console.log.getListOfInvestors');
        investorDataService.getListOfInvestors();
    });

};
