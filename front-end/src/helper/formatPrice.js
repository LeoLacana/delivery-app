const formatPrice = (num) => {
  const decimalNumber = Number(num).toFixed(2);
  return decimalNumber.toString().replace('.', ',');
};

export default formatPrice;
