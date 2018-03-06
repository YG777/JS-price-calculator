function calculate(options) {
  //options = {quantity: 1, type: 'letter'}
  var price = 0;
  if (options.type === "letter" && !options.colour) {
    price = 44;
  } else if (options.type === "letter" && options.colour) {
    price = 49;
  } else if (options.type === "a5postcard" && !options.colour) {
    price = 40;
  } else if (options.type === "a5postcard" && options.colour) {
    price = 50;
  }
  return price * options.quantity;
}

module.exports = {
  calculate
};
