const formatMoney = (number) => Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
  
  export default formatMoney;