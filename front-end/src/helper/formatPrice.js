const formatPrice = (number) => 
    number.toFixed(2).toString().replace('.', ',');

export default formatPrice;
