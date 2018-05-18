    module.exports = function (sequelize, DataTypes) {

    var users = sequelize.define('users', {
        "user_id":  DataTypes.INTEGER,
        "role": DataTypes.STRING,
        "user_type": DataTypes.STRING,
        "company_name":  DataTypes.STRING,
        "last_name":  DataTypes.STRING,
        "first_name":  DataTypes.STRING,
        "user_name":  DataTypes.STRING,
        "password":  DataTypes.STRING,
        "phone":  DataTypes.STRING,


    });

  return users;
};
