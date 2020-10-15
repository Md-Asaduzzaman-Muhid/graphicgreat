/*--------------------- Portfolio Item Filter-----------------*/
jQuery(document).ready(function($) {
  "use strict";

  var $container = $('.features-item'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 2,
    columnWidth = 0;
    if (w > 960) {
      columnNum  = 3;
    }  else if (w > 640) {
      columnNum  = 3;
    }
      else if (w > 480) {
      columnNum  = 2;
    }
    columnWidth = Math.floor(w/columnNum);
    $container.find('.item').each(function() {
      var $item = $(this),
      multiplier_w = $item.attr('class').match(/item-w(\d)/),
      multiplier_h = $item.attr('class').match(/item-h(\d)/),
      width = multiplier_w ? columnWidth*multiplier_w[1]-10 : columnWidth-10,
      height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-10 : columnWidth*0.5-10;
      $item.css({
        width: width,
        height: height
      });
    });
    return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope();
  $(window).smartresize(isotope);

  $('.featuresFilter a').click(function(){
    $('.featuresFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
});



/*-------------------- Elements Fading --------------------*/
jQuery(document).ready(function($) {
"use strict";

  $('.element-from-top').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,top:"0px"},800);
    }); 
  });


  // $('.element-from-bottom').each(function () {
  //   $(this).appear(function() {
  //     $(this).delay(150).animate({opacity:1,bottom:"0px"},800);
  //   }); 
  // });


  $('.element-from-bottom-200').each(function () {
    $(this).appear(function() {
      $(this).delay(200).animate({opacity:1,bottom:"0px"},800);
    }); 
  });

$('.element-from-bottom-600').each(function () {
    $(this).appear(function() {
      $(this).delay(600).animate({opacity:1,bottom:"0px"},800);
    }); 
  });


$('.element-from-bottom-1000').each(function () {
    $(this).appear(function() {
      $(this).delay(1000).animate({opacity:1,bottom:"0px"},800);
    }); 
  });


$('.element-from-bottom-1400').each(function () {
    $(this).appear(function() {
      $(this).delay(1400).animate({opacity:1,bottom:"0px"},800);
    }); 
  });



  $('.element-from-left').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,left:"0px"},800);
    }); 
  });


  $('.element-from-right').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,right:"0px"},800);
    }); 
  });


  $('.element-fade-in').each(function () {
    $(this).appear(function() {
      $(this).delay(150).animate({opacity:1,right:"0px"},800);
    }); 
  });

});