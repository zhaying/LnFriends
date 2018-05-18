module.exports = function (sequelize, DataTypes) {

    var rigs = sequelize.define('rigs', {
        "rig_id":  DataTypes.INTEGER,
        "rig_name": DataTypes.STRING,
        "rig_type":  DataTypes.STRING,
        "rig_operator":   DataTypes.STRING,
        "coin_qty":   DataTypes.DECIMAL(10, 8)
    });

  return rigs;
};
