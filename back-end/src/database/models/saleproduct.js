'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SalesProducts',
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'salesProducts'
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
