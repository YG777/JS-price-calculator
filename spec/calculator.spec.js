var calculator = require('../src/calculator');

describe('Calculator', function() {
  describe('letter pricing', function () {
    it('calculate 1 black letter', function () {
      expect(calculator.calculate({quantity: 1, type: 'letter'})).toBe(44);  
    });
  
    it('calculate 10 black letters', function(){
      expect(calculator.calculate({ quantity: 10, type: 'letter'})).toBe(440);
    });
  });

  describe('postcard pricing', function(){
    it('calculate 1 A5 black postcard', function(){
      expect(calculator.calculate({quantity: 1, type: 'a5postcard'})).toBe(39);
    });

    it('calculate 10 A5 black postcard', function(){
      expect(calculator.calculate({quantity: 10, type: 'a5postcard'})).toBe(390);
    });
  });
});
