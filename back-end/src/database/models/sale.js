'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sales',
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      sellerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        defaultvalue: 0
      },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.NUMBER,
      saleDate: {
        type: DataTypes.DATE,
        notNull: true,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.STRING,
        defaultvalue: 'PENDENTE'
      }
      // role: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'sales'
    }
  );

  Sale.associate = ({ Sales, Users }) => {
    Sales.belongsTo(Users, {
      foreignKey: 'user_id',
      as: 'user'
    });
    Sales.belongsTo(Users, {
      foreignKey: 'seller_id',
      as: 'seller'
    });
  };

  return Sale;
};
