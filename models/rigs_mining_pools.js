    module.exports = function (sequelize, DataTypes) {

    var rigs_mining_pools = sequelize.define('rigs_mining_pools', {
        "rigs_mining_pool_id":  DataTypes.INTEGER,
        "rig_id": DataTypes.INTEGER,
        "mining_pool_id":  DataTypes.INTEGER,
        "total_coins":   DataTypes.FLOAT ,
        "percent_of_coins":   DataTypes.FLOAT
    });

  return rigs_mining_pools;
};
