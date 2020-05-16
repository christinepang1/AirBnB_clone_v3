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
