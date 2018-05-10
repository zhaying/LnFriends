const civicSip = require('civic-sip-api');

// CIVIC Initialize instance passing your appId and secret.
const civicClient = civicSip.newClient({
  appId: process.env.CIVIC_APP_ID,
  prvKey: process.env.CIVIC_PRV_KEY,
  appSecret: process.env.CIVIC_APP_SECRET,
});

module.exports = {
  processToken: function(jwtToken) {
    //Exchange authorization code for user data.
    civicClient.exchangeCode(jwtToken)
    .then((userData) => {
      // store user data and userId as appropriate
      console.log('userData = ', JSON.stringify(userData, null, 4));
    }).catch((error) => {
      console.log(error);
    });
  } //end process
};
