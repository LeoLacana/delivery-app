'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: {
        type: DataTypes.STRING,
        field: 'url_image'
      } 
    },
    {
      timestamps: false,
      tableName: 'products'
    }
  );
  return Product;
};
