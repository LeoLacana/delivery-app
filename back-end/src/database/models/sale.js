'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sales',
    {
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      seller_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        defaultvalue: 0
      },
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.NUMBER,
      sale_date: {
        type: DataTypes.DATE,
        notnull: true,
        defaultvalue: Date.NOW
      },
      status: {
        type: DataTypes.STRING,
        defaultvalue: 'Pendente'
      },
      role: DataTypes.STRING
    },
    {
      timestamps: false
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
