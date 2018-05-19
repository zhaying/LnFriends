const jwt = require('jsonwebtoken');
const civicService  = require("../services/civicService.js");
module.exports = (req, res, next) => {
//  console.log('check-auth: console.log.req',req);
  //console.log('check-auth: console.log.req.body',req.body);
  try {
    //const decoded = jwt.verify(req.body.aToken, process.env.JWT_KEY);
    var jwtToken = req.body.aToken;
  //  console.log("check-auth: console.log{{{{",jwtToken);

    civicService.processToken(jwtToken);
    //req.userData = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}; //end module.exports
