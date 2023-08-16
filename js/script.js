$(document).ready(function(){
  
 $('.slider-content').slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  fade: true,
  cssEase: 'linear'
});
  

$('.p-content').slick({
centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.t-content').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// stick up plugin start
jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
                  $('.stick').stickUp();
                });
});

});