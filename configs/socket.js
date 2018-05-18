var coinDataService = require("../services/coinDataService.js"),
    rigDataService  = require("../services/rigDataService.js");
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

};
