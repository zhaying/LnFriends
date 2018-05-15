var coinDataService = require("../services/coinDataService.js");
module.exports = function (socket) {
    //You can declare all of your socket listeners in this file, but it's not required

    socket.on('coinRequest', function(data) {
        console.log('logged in');
        coinDataService.getDataWithSocket(data);
    });
};
