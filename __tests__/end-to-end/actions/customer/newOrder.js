const faker = require('faker/locale/pt_BR');

const newOrder = (itemList) => ({
  userId: 3,
  sellerId: 2,
  totalPrice: itemList.totalPrice.replace(",", "."),
  deliveryAddress: faker.address.streetName(),
  deliveryNumber: String(Math.round(Math.random()*1000)),
});

module.exports = newOrder;
