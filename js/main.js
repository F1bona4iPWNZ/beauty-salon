$('.our__team-container').slick({
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
    //autoplay:true,
    //autoplaySpeed:3000,
});
$( document ).ready(function() {
    $( ".resetButton" ).on('click',function(){ 
      $('.rating > input').prop('checked','')
  });
    });
