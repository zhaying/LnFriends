module.exports = function (sequelize, DataTypes) {

    var mining_pools = sequelize.define('mining_pools', {
        "mining_pool_id":                 DataTypes.INTEGER,
        "mining_pool_name":               DataTypes.STRING,
        "mining_pool_url":                DataTypes.STRING,
        "mining_pool_wallet_address":     DataTypes.STRING,
        "mining_pool_symbol":             DataTypes.STRING,
        "mining_pool_currency_quantity":  DataTypes.FLOAT
    });

  return mining_pools;
};
