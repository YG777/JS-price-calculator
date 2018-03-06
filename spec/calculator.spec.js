const Calculator = require('../src/calculator');

describe('Calculator', function() {

  var prices = {
    letter: {
      basePrice: 20,
      colourPrice: 21
    },
    a5postcard: {
      basePrice: 30,
      colourPrice: 31
    },
    a6postcard: {
      basePrice: 30,
      colourPrice: 31
    }
  };
  var calculator = new Calculator(prices);

  describe('letter pricing', function() {
    var options = {
      type: 'letter'
    };

    it('calculate 1 black letter', function() {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(prices.letter.basePrice);
    });

    it('calculate 10 black letters', function() {
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.basePrice * options.quantity
      );
    });

    it('calculate 1 colour letter', function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.letter.colourPrice);
    });

    it('calculate 10 colour letters', function() {
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.colourPrice * options.quantity
      );
    });
  });

  describe('postcard pricing', function() {
    var options = {
      type: 'a5postcard'
    };

    it('calculate 1 A5 black postcard', function() {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(prices.a5postcard.basePrice);
    });

    it('calculate 10 A5 black postcard', function() {
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(
        prices.a5postcard.basePrice * options.quantity
      );
    });

    it('calculate 1 A5 colour postcard', function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.a5postcard.colourPrice);
    });

    it('calculate 10 A5 colour postcard', function() {
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.a5postcard.colourPrice * options.quantity);
    });

    it('calculate 1 A6 black postcard', function() {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(prices.a6postcard.basePrice);
    });

    it('calculate 10 A6 black postcard', function() {
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(
        prices.a6postcard.basePrice * options.quantity
      );
    });

    it('calculate 1 A6 colour postcard', function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.a6postcard.colourPrice);

    });

    it('calculate 10 A6 colour postcard', function() {
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.a6postcard.colourPrice * options.quantity);
    });

  });
});
