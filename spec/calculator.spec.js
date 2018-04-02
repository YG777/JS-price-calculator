const Calculator = require("../src/calculator");

describe("Calculator", function() {
  const prices = {
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
    //BLACK LETTERS
    it("calculate 1 black letter", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(prices.letter.basePrice);
    });

    it("calculate 10 black letters", function() {
      options.quantity = 10;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.basePrice * options.quantity
      );
    });
    it("calculate 1 black letter with duplex", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = true;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.duplexExtra + prices.letter.basePrice
      );
    });
    it("calculate 10 black letter with duplex", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = true;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        options.quantity * (prices.letter.duplexExtra + prices.letter.basePrice)
      );
    });

    it("calculate 1 letter black with 1 extra sheets", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = 1;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheet * options.extraSheet +
          prices.letter.basePrice * options.quantity
      );
    });

    it("calculate 10 letter black with 1 extra sheets", function() {
      options.quantity = 10;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = 1;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheet * options.extraSheet +
          prices.letter.basePrice * options.quantity
      );
    });

    it("calculate 1 letter black with 5 extra sheets", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = 5;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheet * options.extraSheet +
          prices.letter.basePrice * options.quantity
      );
    });

    it("calculate 1 letter black with windowed envelope", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.windowedEnvelopeExtra +
          prices.letter.basePrice * options.quantity
      );
    });
  
    it("calculate 10 letters black with windowed envelope", function() {
      options.quantity = 1;
      options.colour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.windowedEnvelopeExtra +
          prices.letter.basePrice * options.quantity
      );
    });

    //COLOR LETTERS

    it("calculate 1 colour letter", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(prices.letter.colourPrice);
    });

    it("calculate 20,000 colour letters", function() {
      options.quantity = 20000;
      options.colour = true;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.colourPrice * options.quantity
      );
    });
    it("calculate 1 colour letter with duplex", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtraColour = true;
      options.extraSheetColour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.duplexExtraColour + prices.letter.colourPrice
      );
    });
    it("calculate 10 colour letter with duplex", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtraColour = true;
      options.extraSheetColour = false;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        options.quantity *
          (prices.letter.duplexExtraColour + prices.letter.colourPrice)
      );
    });

    it("calculate 1 letter colour with 1 extra sheets", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtraColour = false;
      options.extraSheetColour = 1;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheetColour * options.extraSheetColour +
          prices.letter.colourPrice * options.quantity
      );
    });

    it("calculate 10 letter colour with 1 extra sheets", function() {
      options.quantity = 10;
      options.colour = true;
      options.duplexExtraColour = false;
      options.extraSheetColour = 1;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheetColour * options.extraSheetColour +
          prices.letter.colourPrice * options.quantity
      );
    });

    it("calculate 1 letter colour with 5 extra sheets", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtraColour = false;
      options.extraSheetColour = 5;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.windowedEnvelopeExtra = false;
      expect(calculator.calculate(options)).toBe(
        prices.letter.extraSheetColour * options.extraSheetColour +
          prices.letter.colourPrice * options.quantity
      );
    });
    

    it("calculate 1 letters color with windowed envelope", function() {
      options.quantity = 1;
      options.colour = true;
      options.duplexExtra = false;
      options.extraSheet = false;
      options.duplexExtraColour = false;
      options.extraSheetColour = false;
      options.windowedEnvelopeExtra = true;
      expect(calculator.calculate(options)).toBe(
        prices.letter.windowedEnvelopeExtra +
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
