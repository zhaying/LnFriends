var coinDataService = require("../services/coinDataService.js");
module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required
    socket.on('listingRequest', function() {
        console.log('listingRequest');
        coinDataService.getListings();
    });
    socket.on('coinRequest', function(data) {
        console.log('coinRequest');
        coinDataService.getLatestPrice(data);
    });
    socket.on('getCurrencies', function() {
        console.log('getCurrencies');
        coinDataService.getTheCurrencies();
    });
};
