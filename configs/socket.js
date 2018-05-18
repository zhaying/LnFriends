var coinDataService = require("../services/coinDataService.js");
module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required
    socket.on('listingRequest', function() {
        console.log('listingRequest');
        coinDataService.getListings();
    });
    socket.on('coinRequest', function(data) {
        console.log('coinRequest',data);
        coinDataService.getLatestPrice(data);
    });
    socket.on('getCurrencies', function() {
        console.log('getCurrencies');
        coinDataService.getTheCurrencies();
    });
    socket.on('getMiningPoolTotal', function(data) {
        console.log('getMiningPoolTotal',data);
        coinDataService.getMiningPoolTotal(data);
    });
    socket.on('btnAddWallet', function(data) {
        console.log('btnAddWallet', data);
        coinDataService.addWallet(data);
    });
};