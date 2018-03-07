function Calculator(prices) {
  this.prices = prices;

  this.calculate = function (options) {
    const type = options.type;
    const prices = this.prices;
    const colour = options.colour;
    const calculateBase = () => {
      let price = 0;
      if (type === 'letter' && !colour) {
        price = prices.letter.basePrice;
      } else if (type === 'letter') {
        price = prices.letter.colourPrice;
      } else if (type === 'a5postcard' && !colour) {
        price = prices.a5postcard.basePrice;
      } else if (type === 'a5postcard') {
        price = prices.a5postcard.colourPrice;
      } else if (type === 'a6postcard' && !colour) {
        price = prices.a6postcard.basePrice;
      }else if (type === 'a6postcard') {
        price = prices.a6postcard.colourPrice;
      }else if (type === 'greetingCard') {
        price = prices.greetingCard.basePrice;
      }
      return price * options.quantity;
    };
    return calculateBase();

  // const calculateLetterXras = () => {
  //   if (type === 'letter' &&)
  // }
  };
}


module.exports = Calculator;




