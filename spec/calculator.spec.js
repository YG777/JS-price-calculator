var calculator = require('../src/calculator');

describe('Calculator', function() {
  describe('letter pricing', function () {
    var options = {
      type: 'letter'
    };

    it('calculate 1 black letter', function () {
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(44);  
    });
  
    it('calculate 10 black letters', function(){
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(440);
    });

    it('calculate 1 colour letter', function () {
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(49);  
    });
  
    it('calculate 10 colour letters', function(){
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(490);
    });

  });

  describe('postcard pricing', function(){
    var options = {
      type: 'a5postcard'
    };

    it('calculate 1 A5 black postcard', function(){
      options.quantity = 1;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(40);
    });

    it('calculate 10 A5 black postcard', function(){
      options.quantity = 10;
      options.colour = false;
      expect(calculator.calculate(options)).toBe(400);
    });    
    
    it('calculate 1 A5 colour postcard', function(){
      options.quantity = 1;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(50);
    });

    it('calculate 10 A5 colour postcard', function(){
      options.quantity = 10;
      options.colour = true;
      expect(calculator.calculate(options)).toBe(500);
    });

    
  });
});
