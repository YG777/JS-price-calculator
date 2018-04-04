function readValuesAndCreateObject() {
  // console.log(
  //   'capture all the values into the correct object and log to console'
  // );
  var quantity = $('#quantity').val();
  // var orderType = $('.choice').attr('id');

  // $(':button.choice').on('click', function() {
  //   var btnClickedID = $('.choice').attr('id');
  //   // console.log('capturedID ' + btnClickedID);
  //   orderType = btnClickedID;
  // });

  var extraSheets = $('#extraSheets').val();

  var isColour = $('input[name="colour"]:checked').val();
  var isDuplex = $('input[name="duplex"]:checked').val();
  var isWindowedEnvelope = $('input[name="envelope"]:checked').val();

  const options = {
    quantity,
    // type: orderType,
    extraSheets,
    colour: isColour,
    duplex: isDuplex,
    windowedEnvelopeExtra: isWindowedEnvelope
  };
  console.log(options);
}

$(function() {
  //type
  $(':button.choice').on('click', function() {
    const btnClicked = $(this).attr('id');
    console.log('btn clicked: ' + btnClicked);
  
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

