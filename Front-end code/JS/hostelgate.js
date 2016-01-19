var hostelgateCenter = new google.maps.LatLng(54.674890, 25.289215);

function initialize() {

var hostelgateMapProp = {
center:hostelgateCenter,
zoom:13,
scrollwheel:false,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};



var hostelgateMap = new google.maps.Map(document.getElementById("hs_googleMap"),hostelgateMapProp);


var hostelgateMarker = new google.maps.Marker({
position:hostelgateCenter,
});


hostelgateMarker.setMap(hostelgateMap);
}

google.maps.event.addDomListener(window, 'load', initialize);

//Smooth scrolling
$(document).ready(function(){

  // Add smooth scrolling
  $(".navbar a[href='#hostelgatePage'], .navbar a[href='#contactSection'], footer a[href='#hostelgatePage']").on('click', function(event) {

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
  
  
    // Moments Carousel - Go to the corresponding picture depending which thumbnail you click on
    $("#firstThumbnail").click(function(){
        $("#momentsCarousel").carousel(0);
    });
	
	$("#secondThumbnail").click(function(){
        $("#momentsCarousel").carousel(1);
    });
	
	$("#thirdThumbnail").click(function(){
        $("#momentsCarousel").carousel(2);
    });
	
	$("#forthThumbnail").click(function(){
        $("#momentsCarousel").carousel(3);
    });
  
})

//Slide Up animation
$(window).scroll(function() {
  $(".slideDownAnim").each(function(){
    var pos = $(this).offset().top;
    
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) { //the greater the number is the sooner the animation will start
      $(this).addClass("slideDownNow");
    }
  });
});

//Slide Right animation
$(window).scroll(function() {
  $(".slideRightAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 750) {
      $(this).addClass("slideRightNow");
    }
  });
});

//Slide Left animation
$(window).scroll(function() {
  $(".slideLeftAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slideLeftNow");
    }
  });
});

//Slide In animation
$(window).scroll(function() {
  $(".slideInAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 700) {
      $(this).addClass("slideInNow");
    }
  });
});

//Slide Out animation
$(window).scroll(function() {
  $(".slideOutAnim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slideOutNow");
    }
  });
});