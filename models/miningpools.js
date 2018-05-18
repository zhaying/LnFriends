module.exports = function (sequelize, DataTypes) {

    var miningpools = sequelize.define('miningpools', {
        "miningpools_id":               DataTypes.INTEGER,
        "miningpool_wallet_address":    DataTypes.STRING,
        "miningpool_symbol":            DataTypes.STRING,
        "miningpool_currency_quantity": DataTypes.DECIMAL(10, 8) 
    });

  return miningpools;
};
