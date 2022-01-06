'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SalesProducts',
    {
      sale_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );

  SaleProduct.associate = ({ Sales, Products }) => {
    Sales.belongsToMany(Products, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });
    Products.belongsToMany(Sales, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });
  };

  return SaleProduct;
};
