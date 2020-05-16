$(function () {
  const dict = {};

  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      dict[$(this).data('id')] = $(this).data('name');
    } else {
      delete dict[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(dict).join(', '));
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  console.log(data);
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
      }
  });
