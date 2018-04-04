const readValuesAndCreateObject = (...values) => {
 console.log(String(values));
  
  const quantity = $('#quantity').val();
  const type = String(values);
  const extraSheets = $('#extraSheets').val();
  const isColour = $('input[name="colour"]:checked').val();
  const isDuplex = $('input[name="duplex"]:checked').val();
  const isWindowedEnvelope = $('input[name="envelope"]:checked').val();


  const options = {
    quantity,
    type,
    extraSheets,
    colour: isColour,
    duplex: isDuplex,
    windowedEnvelopeExtra: isWindowedEnvelope
  };
  console.log(options);
};

$(function() {
  
  $(':button.choice').on('click', function() {
    const btnClicked = $(this).attr('id');
    console.log('btn clicked: ' + btnClicked);
    readValuesAndCreateObject(btnClicked);
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

