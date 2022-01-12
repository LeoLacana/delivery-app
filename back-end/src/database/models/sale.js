'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sales',
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: 'user_id',
      },
      sellerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        defaultvalue: 0,
        field: 'seller_id',
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        field: 'total_price',
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        field: 'delivery_address',
      },
      deliveryNumber: {
        type: DataTypes.NUMBER,
        field: 'delivery_number',
      },
      saleDate: {
        type: DataTypes.DATE,
        notNull: true,
        defaultValue: DataTypes.NOW,
        field: 'sale_date',
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
      foreignKey: 'userId',
      as: 'user'
    });
    Sales.belongsTo(Users, {
      foreignKey: 'sellerId',
      as: 'seller'
    });
  };

  return Sale;
};
