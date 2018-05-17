module.exports = function (sequelize, DataTypes) {
  var currencies = sequelize.define('currencies', {
    "currencies_id": DataTypes.INTEGER,
    "name": DataTypes.STRING,
    "symbol": DataTypes.STRING,
    "website_slug": DataTypes.STRING
  });

  return currencies;
};
