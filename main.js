
let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `landmark.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#GC")

	
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([-112.125092, 36.056595])
		.addTo(map);

	var img2 = document.querySelector("#GP")
	
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([31.134202,29.979235 ])
		.addTo(map);

	var img3 = document.querySelector("#SL")
	
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([-74.044502,40.689247])
		.addTo(map);


	var img4 = document.querySelector("#ET")

	
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([2.2943886883, 48.8582275163])
		.addTo(map);


	
	var img5 = document.querySelector("#GGB")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([-122.478255, 37.819929])
		.addTo(map);

        var img6 = document.querySelector("#TM")

	var marker6 = new mapboxgl.Marker({
		element: img6
	})
		.setLngLat([78.0421552, 27.1750151])
		.addTo(map);

		var img7 = document.querySelector("#GWOC")

	var marker7 = new mapboxgl.Marker({
		element: img7
	})
		.setLngLat([116.570374, 40.431908])
		.addTo(map);

		var img8 = document.querySelector("#SPH")

	var marker8 = new mapboxgl.Marker({
		element: img8
	})
		.setLngLat([151.215256, -33.856159])
		.addTo(map);

		var img9 = document.querySelector("#JS")

	var marker9 = new mapboxgl.Marker({
		element: img9
	})
		.setLngLat([-43.2065, -22.9510])
		.addTo(map);

		var img10 = document.querySelector("#LTOP")

	var marker10 = new mapboxgl.Marker({
		element: img10
	})
		.setLngLat([10.396597, 43.722952])
		.addTo(map);

		var img11 = document.querySelector("#MK")

	var marker11 = new mapboxgl.Marker({
		element: img11
	})
		.setLngLat([37.620407, 55.754093])
		.addTo(map);
		
}