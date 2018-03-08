const Calculator = require("../src/calculator");

describe("Calculator", function() {
  var prices = {
    letter: {
      basePrice: 44,
      colourPrice: 50,
      extraSheet: 4,
      extraSheetColour: 6,
      duplexExtra: 2,
      duplexExtraColour: 3,
      windowedEnvelopeExtra: 1
    },
    a5postcard: {
      basePrice: 40,
      colourPrice: 50
    },
    a6postcard: {
      basePrice: 39,
      colourPrice: 47
    },
    greetingCard: {
      basePrice: 100
    }
  };
  var calculator = new Calculator(prices);

  describe("letter pricing", function() {
    var options = {
      type: "letter"
    };

    it("calculate 1 black letter", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      expect(calculator.calculate(options)).toBe(prices.letter.basePrice);
    });

    it("calculate 10 black letters", function() {
      options.quantity = 10;
      options.colour = false;
      options.duplexExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.basePrice * options.quantity
      );
    });
    it("calculate 1 black letter with duplex", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.duplexExtra + prices.letter.basePrice
      );
    });
    it("calculate 10 black letter with duplex", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = true;
      expect(calculator.calculate(options)).toBe(
        options.quantity * (prices.letter.duplexExtra + prices.letter.basePrice)
      );
    });

    it("calculate 1 letter black with 1 extra sheets", function() {
      options.quantity = 1;
      options.colour = false;
      options.extraSheet = 1;
      expect(calculator.calculate(options)).toBe(
        (prices.letter.extraSheet * options.extraSheet) + prices.letter.basePrice
      );
    });

    it("calculate 1 colour letter", function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.letter.colourPrice);
    });

    it("calculate 20,000 colour letters", function() {
      options.quantity = 20000;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.colourPrice * options.quantity
      );
    });
  });

  describe(" A5 postcard pricing", function() {
    var options = {
      type: "a5postcard"
    };

    it("calculate 1 A5 black postcard", function() {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(prices.a5postcard.basePrice);
    });

    it("calculate 10 A5 black postcard", function() {
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(
        prices.a5postcard.basePrice * options.quantity
      );
    });

    it("calculate 1 A5 colour postcard", function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.a5postcard.colourPrice);
    });

    it("calculate 10 A5 colour postcard", function() {
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.a5postcard.colourPrice * options.quantity
      );
    });
  });

  describe(" A6 postcard pricing", function() {
    var options = {
      type: "a6postcard"
    };

    it("calculate 1 A6 black postcard", function() {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(prices.a6postcard.basePrice);
    });

    it("calculate 10 A6 black postcard", function() {
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(
        prices.a6postcard.basePrice * options.quantity
      );
    });

    it("calculate 1 A6 colour postcard", function() {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(prices.a6postcard.colourPrice);
    });

    it("calculate 10 A6 colour postcard", function() {
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(
        prices.a6postcard.colourPrice * options.quantity
      );
    });
  });

  describe("greetingCard pricing", function() {
    var options = {
      type: "greetingCard"
    };

    it("calculate 1 geeting card", function() {
      options.quantity = 1;
      expect(calculator.calculate(options)).toBe(prices.greetingCard.basePrice);
    });

    it("calculate 10 geeting cards", function() {
      options.quantity = 10;
      expect(calculator.calculate(options)).toBe(
        prices.greetingCard.basePrice * options.quantity
      );
    });
  });
});
