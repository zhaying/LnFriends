module.exports = function (sequelize, DataTypes) {

    var mining_pool = sequelize.define('mining_pool', {
        "mining_pool_id":               DataTypes.INTEGER,
        "mining_pool_name":    DataTypes.STRING,
        "mining_pool_wallet_address":    DataTypes.STRING,
        "mining_pool_symbol":            DataTypes.STRING,
        "mining_pool_currency_quantity": DataTypes.FLOAT
    });

  return mining_pool;
};
