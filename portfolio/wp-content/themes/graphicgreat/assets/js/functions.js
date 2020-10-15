jQuery(document).ready(function($) {
  "use strict";


// $( window ).load( function()
// {
//     var columns    = 3,
//         setColumns = function() { columns = $( window ).width() > 640 ? 3 : $( window ).width() > 320 ? 2 : 1; };
 
//     setColumns();
//     $( window ).resize( setColumns );
 
//     $( '#list' ).masonry(
//     {
//         itemSelector: '.item',
//         columnWidth:  function( containerWidth ) { return containerWidth / columns; }
//     });
// });



	$(document).ready(function () {
	    var carousel = $("#owl-demo");
	  carousel.owlCarousel({
	    navigation:true,
	    navigationText: [
	      "<i class='fa fa-angle-left'></i>",
	      "<i class='fa fa-angle-right'></i>"
	      ],

	      autoPlay: 3000, //Set AutoPlay to 3 seconds
	 
	      items : 5,
	      itemsDesktop : [1199,5],
	      itemsDesktopSmall : [979,4],		 
	      itemsDesktopSmall : [768,3],		 
	      itemsDesktopSmall : [480,2]		 
					  
	  });
	  
	});


});//Document Ready function End



/*  - Boxer 
---------------------------------------------------*/
  jQuery(document).ready(function(){
    jQuery(".boxer").boxer({ 
        margin:100
    }); 
  })
/*   - Boxer end 
---------------------------------------------------*/


