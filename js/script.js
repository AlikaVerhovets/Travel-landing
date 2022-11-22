$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="imgs/slider/left-arrow.png" alt="" class="img-arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="imgs/slider/right-arrow.png" alt="" class="img-arrow right"></button>',
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

let sliderHeight;

$(window).on("load", function() {
    sliderHeight = $('.section-slider').height();
    $('.slider-container').css({'height' : sliderHeight, 'margin-bottom':-sliderHeight});
    sliderHeight = $('.section-slider').height();
    $('.slider-container').css({'height' : sliderHeight, 'margin-bottom':-sliderHeight});
    $('.slick-slider').css({'height' : sliderHeight});
    $('.slick-list').css({'height' : sliderHeight});
    $('.slick-track').css({'height' : sliderHeight});
    $('.slick-slide').css({'height' : sliderHeight});
    $('.svg-container-slide').css({'height' : sliderHeight});
    $('.width100').css({'height' : sliderHeight})

});

$(window).resize(function (){
    sliderHeight = $('.section-slider').height();
    $('.slider-container').css({'height' : sliderHeight, 'margin-bottom':-sliderHeight});
    $('.slick-slider').css({'height' : sliderHeight});
    $('.slick-list').css({'height' : sliderHeight});
    $('.slick-track').css({'height' : sliderHeight});
    $('.slick-slide').css({'height' : sliderHeight});
    $('.svg-container-slide').css({'height' : sliderHeight});
    $('.width100').css({'height' : sliderHeight});
})


