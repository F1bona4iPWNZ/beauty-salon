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
$('.servises__wrapper').slick({
  dots: true,
  dotsClass: 'slick-dots',
  infinite: true,
  adaptiveHeight: true,
  slidesToShow:4,
  slidesToScroll:1,
  arrows:false,
  responsive: [
    {
        breakpoint: 1070, // tablet breakpoint
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 790, // mobile breakpoint
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
      breakpoint: 628, // mobile breakpoint
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
]
  //autoplay:true,
  //autoplaySpeed:3000,

});
$( document ).ready(function() {
    $( ".resetButton" ).on('click',function(){ 
      $('.rating > input').prop('checked','')
  });
    });
    $('.header_btn-menu').on('click', function(){
      $('.menu__ul-mobile').slideToggle();
  });
  