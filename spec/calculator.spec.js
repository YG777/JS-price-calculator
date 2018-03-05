var calculator = require('../src/calculator');
describe('Calculator', function() {

  const order = {
    type: 'letter',
    quantity: 25,
    options: {
      colour: true,
      duplexColour: true,
      extraSheetColour: 2,
      windowed: true
    }
  };

  it('calculate 1letter price ', function () {

    const options = order.options; 
    expect(calculator.letterColourPrices(options)).toBe(65);  
  });
  
 
});