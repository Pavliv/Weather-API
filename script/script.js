var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
searchBox.addListener('places_changed', function() {
	var locale = searchBox.getPlaces()[0];
});