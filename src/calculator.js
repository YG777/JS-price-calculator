function Calculator(prices) {
  this.prices = prices;

  this.calculate = function (options) {
    let price = 0;
    if (options.type === 'letter' && !options.colour) {
      price = this.prices.letter.basePrice;
    } else if (options.type === 'letter') {
      price = this.prices.letter.colourPrice;
    } else if (options.type === 'a5postcard' && !options.colour) {
      price = this.prices.a5postcard.basePrice;
    } else if (options.type === 'a5postcard') {
      price = this.prices.a5postcard.colourPrice;
    } else if (options.type === 'a6postcard' && !options.colour) {
      price = this.prices.a6postcard.basePrice;
    }else if (options.type === 'a6postcard') {
      price = this.prices.a6postcard.colourPrice;
    }
    return price * options.quantity;
  };
}


module.exports = Calculator;




