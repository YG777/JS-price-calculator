function readValuesAndCreateObject() {
  console.log(
    'capture all the values into the correct object and log to console'
  );
  var quantity = $('#quantity').val();
  var type = $('button[name="type"]').attr('id');
  var extraSheets = $('#extraSheets').val();

  var isColour = $('input[name="colour"]:checked').val();
  var isDuplex = $('input[name="duplex"]:checked').val();
  var isWindowedEnvelope = $('input[name="envelope"]:checked').val();

  const options = {
    type,
    quantity,
    extraSheets,
    colour: isColour,
    duplex: isDuplex,
    windowedEnvelopeExtra: isWindowedEnvelope
  };
  console.log(options);
  return options;
}

$(function() {
  //type
  $('button[name="type"]').on('click', function() {
    readValuesAndCreateObject();
    calculatorFields();
  });
  //slider
  $('#quantity').on('change', function() {
    const slider = $(this);
    const qty = slider.val();
    slider.next('.range-value').html(qty);
    readValuesAndCreateObject();
  });

  $('#extraSheets').on('change', function() {
    const slider = $(this);
    const qty = slider.val();
    slider.next('.range-value').html(qty);
    readValuesAndCreateObject();
  });
  //radio buttons
  $('input[type="radio"]').on('change', function() {
    readValuesAndCreateObject();
  });
});

//if type not letter, hide letter options

function calculatorFields() {
  var getType = readValuesAndCreateObject();

  if (getType === 'letter') {
    $('.letter-field').collapse('show');
  }
}
