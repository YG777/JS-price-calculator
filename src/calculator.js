// //DUMMY PRICE DATA
var data = {
  a5Postcard: {
    a5BasePrice: 40,
    a5BasePriceColour: 50
  },
  a6Postcard: {
    a6BasePrice: 39,
    a6BasePriceColour: 47
  },
  greetingCard: {
    basePrice: 100
  },
  letter: {
    // basePrice: 44,
    basePriceColour: 49,
    // extraSheet: 4,
    extraSheetColour: 6,
    // duplexExtra: 2,
    duplexExtraColour: 3,
    windowedEnvelopeExtra: 1
  }
};

const order = {
  type: 'letter',
  quantity: 25,
  options: {
    colour: true,
    duplexColour: false,
    extraSheetColour: 2,
    windowed: true
  }
};
//ORDER VARS
const type                        = order.type;
const quantity                    = order.quantity;
const options                     = order.options; 
//ORDER OBJ OPTIONS VARS
const orderNumLetterXsheetcolour  = order.options.extraSheetColour;
const orderLetterDuplexColour     = order.options.duplexColour;
const orderLetterWindowed         = order.options.windowed;
const orderNumLetterXsheet        = order.options.extraSheet;
const orderLetterDuplex           = order.options.duplex;
//PRICE VARS
const priceLetterColour           = data.letter.basePriceColour;
const priceLetterXcolour          = data.letter.extraSheetColour;
const priceLetterDuplexColour     = data.letter.duplexExtraColour;
const priceLetterWind             = data.letter.windowedEnvelopeExtra;
const priceLetter                 = data.letter.basePrice;
const priceLetterX                = data.letter.extraSheet;

const getType = (type) => {
  if (type === 'letter') {
    letterOptions(options);
  } else if (type === 'a5Postcard' || type === 'a6Postcard') {
    postcardOptions(options);
  }else if (type === 'greetingCard'){
    greetingcardOptions(options);
  }
};

const letterOptions = (options) => {
  if (options.colour) {
    console.log('-option colour, calling lettercolourPrices');
    letterColourPrices(options);
  }else {
    letterBasePrices(options);
  }
};

const letterColourPrices  = (options) => {
  let retVal = 0;
  Object.keys(options).forEach(k => { 
    if (k === 'colour' && options[k]) {
      retVal = retVal + priceLetterColour;
      // console.log(retVal);
    } else if (k === 'duplexColour' && options[k]) {
      retVal = retVal + priceLetterDuplexColour;
      // console.log(retVal);
    } else if (k === 'extraSheetColour' && options[k]) {
      retVal = retVal + (orderNumLetterXsheetcolour*priceLetterXcolour);
      // console.log(retVal);
    }
    else if (k === 'windowed' && options[k]) {
      retVal = retVal + orderLetterWindowed;
      // console.log(retVal);
    }
  });
  return retVal;
};
  






module.exports = {
  getType,
  letterOptions,
  letterColourPrices
};
