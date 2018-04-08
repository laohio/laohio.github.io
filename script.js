$(function() {
    // Change to fixed navbar on scroll
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll > 60) {
        	$(".fixed-top").addClass("fixednav");
        	$(".nav-item > a, .navbar-brand").css("color","black");
            //$("body").css("padding-top","100px");
    	} else {
        	$(".fixed-top").removeClass("fixednav");
        	$(".nav-item > a, .navbar-brand").css("color","white");
    	}
	});

});

// Google Maps API for contact section
function init_map() { 
        
    // Set my location
    var location = new google.maps.LatLng(42.407532, -71.119002);

    // Map attributes
    var mapoptions = {
      center: location,
      zoom: 14
    };

    // Custom marker image for me, sized appropriately
    myIcon = new google.maps.MarkerImage("me.jpg", null, null, null, new google.maps.Size(35, 40));

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: myIcon,
      title:"Nicholas Ficeto"});

    var infowindow = new google.maps.InfoWindow();

    var map = new google.maps.Map(document.getElementById("map-container"),
        mapoptions);

    marker.setMap(map); 

    // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
      var content_string = "<p class='map_text'>" + "<i class='fa fa-university fa-2x fa-fw university'></i>" + "  Home Base" + "</p>" + "<p class='map_text'>" + "Location: Tufts Univeristy" + "</p>";
      infowindow.setContent(content_string);
      infowindow.open(map, this);
    });
}
// Call Google Maps function 
google.maps.event.addDomListener(window, 'load', init_map);
