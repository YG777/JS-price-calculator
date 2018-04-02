function readValuesAndCreateObject() {
  console.log(
    'capture all the values into the correct object and log to console'
  );
  var quantity = $('#quantity').val();
  var extraSheets = $('#extraSheets').val();

  var isColour = $('input[name="colour"]:checked').val();
  var isDuplex = $('input[name="duplex"]:checked').val();
  var isWindowedEnvelope = $('input[name="envelope"]:checked').val();

  const options = {
    quantity,
    extraSheets,
    colour: isColour,
    duplex: isDuplex,
    windowedEnvelopeExtra: isWindowedEnvelope
  };
  console.log(options);
}


$(function() {
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

  $('input[type="radio"]').on('change', function() {
    readValuesAndCreateObject();
  });

});

