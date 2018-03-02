//DUMMY PRICE DATA
var data = {
  'a5Postcard': {
    'a5BasePrice': 40,
    'a5BasePriceColour': 50
  },
  'a6Postcard': {
    'a6BasePrice': 39,
    'a6BasePriceColour': 47
  },
  'greetingCard': {
    'basePrice': 100
  },
  'letter': {
    'basePrice': 44,
    'basePriceColour': 49,
    'extraSheet': 4,
    'extraSheetColour': 6,
    'duplexExtra': 2,
    'duplexExtraColour': 3,
    'windowedEnvelopeExtra': 1
  }
};
 
//DUMMY ORDER
var cardOrderA5 = 6;
var cardOrderA6 = 10;
var letterOrder = {
  'bw': 16,
  'color': 15,
  'extraSheet': 10,
  'extraSheetColour': 5,
  'duplexExtra': 3,
  'duplexExtraColour': 6,
  'windowedEnvelopeExtra': 15
};

//CALCULATOR
const letterPrices = Object.values(data['letter']); 
const letterOrderCosts = Object.values(letterOrder);
const lettersTotalPrice = () =>{
  let lettersSum = 0;
  for(let i=0; i< letterPrices.length; i++) {
    lettersSum += letterPrices[i]*letterOrderCosts[i];
  }
  return lettersSum;
};
  
const cardOrderA5TotalPrice = Object.values(data['a5Postcard'])[1]*cardOrderA5; 
const cardOrderA6TotalPrice = Object.values(data['a6Postcard'])[1]*cardOrderA6;
  
const orderTotal = () => {
  const totalSum = (lettersTotalPrice() + cardOrderA6TotalPrice + cardOrderA5TotalPrice)/100;
  return totalSum;
};
  
orderTotal();
  