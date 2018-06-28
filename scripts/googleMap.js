function initMap() {
	var pos = {lat: 42.662369, lng:  23.373397};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: pos
	});
	markers = []
	markers.add(new google.maps.Marker({
		position: pos,
		map: map
	}));
}