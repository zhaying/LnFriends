module.exports = function (sequelize, DataTypes) {

    var currencies = sequelize.define('currencies', {
        "currency_id":      DataTypes.INTEGER,
        "currency_name":    DataTypes.STRING,
        "currency_symbol":  DataTypes.STRING
    });

  return currencies;
};
