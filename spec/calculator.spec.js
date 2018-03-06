var calculator = require('../src/calculator');

describe('Calculator', function() {
  describe('letter pricing', function () {
    var options = {
      type: 'letter'
    };

    it('calculate 1 black letter', function () {
      options.quantity = 1;
      expect(calculator.calculate(options)).toBe(44);  
    });
  
    it('calculate 10 black letters', function(){
      options.quantity = 10;
      expect(calculator.calculate(options)).toBe(440);
    });
  });

  describe('postcard pricing', function(){
    var options = {
      type: 'a5postcard'
    };

    it('calculate 1 A5 black postcard', function(){
      options.quantity = 1;
      expect(calculator.calculate(options)).toBe(39);
    });

    it('calculate 10 A5 black postcard', function(){
      options.quantity = 10;
      expect(calculator.calculate(options)).toBe(390);
    });
  });
});
