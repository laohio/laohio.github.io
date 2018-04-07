$(function() {
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

