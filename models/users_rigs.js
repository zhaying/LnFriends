    module.exports = function (sequelize, DataTypes) {

    var users_rigs = sequelize.define('users_rigs', {
        "user_rigs_id":  DataTypes.INTEGER,
        "user_id": DataTypes.INTEGER,
        "rig_id": DataTypes.INTEGER,
        "ownership_percent":  DataTypes.FLOAT,

    });

  return users_rigs;
};
