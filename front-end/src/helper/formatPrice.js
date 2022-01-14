const formatPrice = (number) => {
  const decimalNumber = number.toFixed(2);
  return decimalNumber.toString().replace('.', ',');
};

export default formatPrice;
