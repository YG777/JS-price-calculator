

function calculate(options){ //options = {quantity: 1, type: 'letter'}
  var price = 0;
if (options.type === 'letter') {
    price = 44;
  
  } else if (options.type === 'a5postcard') {
    price = 39;
   
  }

  return price * options.quantity;

}



module.exports = {
  calculate  
};
