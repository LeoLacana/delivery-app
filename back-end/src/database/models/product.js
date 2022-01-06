'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'products'
    }
  );
  return Product;
};
