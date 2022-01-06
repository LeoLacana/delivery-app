'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'users'
    }
  );
  return User;
};
