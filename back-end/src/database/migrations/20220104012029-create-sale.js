'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sellerId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'seller_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      totalPrice: {
        allowNull: false,
        defaultValue: 1,
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2)
      },
      deliveryAddress: {
        allowNull: false,
        defaultValue: 1,
        field: 'delivery_address',
        type: Sequelize.STRING
      },
      deliveryNumber: {
        allowNull: false,
        defaultValue: 1,
        field: 'delivery_number',
        type: Sequelize.STRING
      },
      saleDate: {
        type: Sequelize.DATE,
        field: 'sale_date',
        defaultValue: Sequelize.NOW
      },
      status: {
        allowNull: false,
        defaultValue: 'PENDENTE',
        type: Sequelize.STRING
      }
      // role: {
      //   allowNull: false,
      //   type: Sequelize.ENUM('administrator', 'seller', 'customer')
      // }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
