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

  Sale.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });
    Product.belongsToMany(Sale, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });
  };

  return SaleProduct;
};
