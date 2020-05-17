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
if (status === 'success') {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
      }
}

$.ajax('http://0.0.0.0:5001/api/v1/places_search', {
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: data => {
      data.forEach(place => {
	$('section.places').append(
	  `<article>
	      <div class="title_box">
	        <h2>${place.name}</h2>
	        <div class="price_by_night">$${place.price_by_night}</div>
	      </div>
	      <div class="information">
	        <div class="max_guest">${place.max_guest} Guests</div>
            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
	      </div>
          </div>
          <div class="description">
	        ${place.description}
	  </div>
	    </article>`
	  );
	}
	}
 );
