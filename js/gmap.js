$(document).ready(function(){

//Gmap
	
	var map;

	var marker;

	var LatLng = new google.maps.LatLng(59.32522, 18.07002);
	var markerPosition = new google.maps.LatLng(59.32512, 18.069992);
	var MY_MAPTYPE_ID = 'custom_style';

	
	function initialize() {

		var featureOpts = [
		{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#242b34' },
			{ saturation: -69 },
			{ lightness: -85 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#ffffff' },
			{ saturation: -80 },
			{ lightness: -2 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#71db8e' },
			{ saturation: -25 },
			{ lightness: -13 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'administrative.country',
		elementType: 'all',
		stylers: [
			{ hue: '#ffcb08' },
			{ saturation: 100 },
			{ lightness: -0 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{ hue: '#00d6b6' },
			{ saturation: -50 },
			{ lightness: -6 },
			{ visibility: 'on' }
		]
	}
		];

		var mapOptions = {
			zoom: 12,
			center: LatLng,
			scrollwheel: false,     

			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};

		map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var styledMapOptions = {
			name: 'Custom Style'
		};
		
		marker =  new google.maps.Marker({
		draggable:true,
		position: markerPosition,
    	animation: google.maps.Animation.DROP,
		map:map
		
	})
		var user_content = "<div class='map-window'>"+
								"<div class='map-window-info'>"+
									"<img src='images/gmap-image.jpg' alt='' width='80' height='80'/>"+
									"<p>Company name</p>"+
								"</div>"+
								"<div class='map-description'>"+
									"<p>"+
									"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nobis, deleniti reiciendis veritatis commodi repudiandae beatae "+
									"</p>"+
								"</div>"+	
							"</div>";
		var infoWindow = new google.maps.InfoWindow({
			content: user_content,
			position: LatLng,
			maxwidth: 320 
		})
		google.maps.event.addListener(marker,'click', function(){

			infoWindow.open(map);
			toggleBounce();
		});
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}
		
	function toggleBounce() {

  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
  		} 		else {
    		marker.setAnimation(google.maps.Animation.BOUNCE);
  		}
	}
	google.maps.event.addDomListener(window, "resize", function() {
	 	var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});

	google.maps.event.addDomListener(window, 'load', initialize);

	//Gmap END


})


