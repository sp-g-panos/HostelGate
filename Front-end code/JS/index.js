var hostelgateCenter = new google.maps.LatLng(54.674890, 25.289215);
var bnbCenter = new google.maps.LatLng(54.679064, 25.283150);


function initialize() {

var hostelgateMapProp = {
center:hostelgateCenter,
zoom:15,
scrollwheel:true,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};


var bnbMapProp = {
center:bnbCenter,
zoom:15,
scrollwheel:true,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var hostelgateMap = new google.maps.Map(document.getElementById("hs_googleMap"),hostelgateMapProp);
var bnbMap = new google.maps.Map(document.getElementById("bnb_googleMap"),bnbMapProp);

var hostelgateMarker = new google.maps.Marker({
position:hostelgateCenter,
});

var bnbMarker = new google.maps.Marker({
position:bnbCenter,
});

hostelgateMarker.setMap(hostelgateMap);
bnbMarker.setMap(bnbMap);
}

google.maps.event.addDomListener(window, 'load', initialize);

//Smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling
  $(".navbar-brand, .navbar a[href='#contactSection'], footer a[href='#mainPage']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
  
   // Facilities Carousel - Go to the corresponding picture depending which thumbnail you click on
    $("#thumb1").click(function(){
        $("#facilitiesCarousel").carousel(0);
    });
	
	$("#thumb2").click(function(){
        $("#facilitiesCarousel").carousel(1);
    });
	
	$("#thumb3").click(function(){
        $("#facilitiesCarousel").carousel(2);
    });
	
	$("#thumb4").click(function(){
        $("#facilitiesCarousel").carousel(3);
    });
	$("#thumb5").click(function(){
        $("#facilitiesCarousel").carousel(4);
    });
	
	$("#thumb6").click(function(){
        $("#facilitiesCarousel").carousel(5);
    });
	
	$("#thumb7").click(function(){
        $("#facilitiesCarousel").carousel(6);
    });
	
	$("#thumb8").click(function(){
        $("#facilitiesCarousel").carousel(7);
    });
  
})

//Slide In animation
$(window).scroll(function() {
  $(".slideInAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slideInNow");
    }
  });
});

//Slide Out animation
$(window).scroll(function() {
  $(".slideOutAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 700) {
      $(this).addClass("slideOutNow");
    }
  });
});