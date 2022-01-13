'use strict';

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SalesProducts',
    {
      saleId: {
        type: DataTypes.INTEGER,
        field: 'sale_id',
      },
      productId: {
        type: DataTypes.INTEGER,
        field: 'product_id',
      },
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
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    Products.belongsToMany(Sales, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  };

  return SaleProduct;
};
