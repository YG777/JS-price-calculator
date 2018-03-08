function Calculator(prices) {
  this.prices = prices;

  this.calculate = function (options) {
    const type = options.type;
    const prices = this.prices;
    const colour = options.colour;

    const calculateTotal = (calculateBase, calculateLetterXtras) => {
      let basePrice = calculateBase();
      let xras = calculateLetterXtras();
      if (xras) {
        return basePrice + xras;
      } else {
        return basePrice;
      }
    };

    const calculateLetterXtras = () => {
      let price = 0;
      if (type === 'letter' && !colour && options.duplexExtra) {
        price =  prices.letter.duplexExtra;
      } else if (type === 'letter' && !colour && options.extraSheet){
        price = prices.letter.extraSheet*options.extraSheet;
      }

      return price;
    };

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

    return calculateTotal(calculateBase, calculateLetterXtras);
  };
}


module.exports = Calculator;




