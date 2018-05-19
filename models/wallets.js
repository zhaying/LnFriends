module.exports = function (sequelize, DataTypes) {

    var wallets = sequelize.define('wallets', {
        "wallet_owner_id":  DataTypes.INTEGER,
        "wallet_currency": DataTypes.STRING,
        "wallet_address":  DataTypes.STRING,
        "wallet_symbol":   DataTypes.STRING
    });

  return wallets;
};
