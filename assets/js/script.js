var input = document.getElementById("zip-code");
var options = {
  types: ['(regions)'],
  componentRestrictions: {country:'us'}
};
autocomplete = new google.maps.places.Autocomplete(input, options);