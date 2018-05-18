module.exports = function (sequelize, DataTypes) {

    var rigs = sequelize.define('rigs', {
        "rig_id":  DataTypes.INTEGER,
        "rig_name": DataTypes.STRING,
        "rig_type":  DataTypes.STRING,
        "rig_operator":   DataTypes.STRING,
        "rig_cost":   DataTypes.FLOAT
    });

  return rigs;
};
