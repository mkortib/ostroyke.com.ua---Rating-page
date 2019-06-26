$(function() {

  // main slider

  $('.rating_main_slider_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    dots: true,
    prevArrow: '.main_slide_arr_left',
    nextArrow: '.main_slide_arr_right',
    // autoplay: true,
    fade: true,
    cssEase: 'linear', 
    speed: 500,
    autoplaySpeed: 3000
  });

  $('.rating_main_slider_wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".slick-slide").removeClass('works');
    $('.slick-current').addClass('works');        
 });

  // stars rating
  
    /* 5 stars */

  $('.stars_five').starrr({
    readOnly: true,
    max: 5,
    rating: 5
  });

    /* 4 stars */

  $('.stars_four').starrr({
    readOnly: true,
    max: 5,
    rating: 4
  });

    /* 3 stars */

  $('.stars_three').starrr({
    readOnly: true,
    max: 5,
    rating: 3
  });

    /* 2 stars */

  $('.stars_two').starrr({
    readOnly: true,
    max: 5,
    rating: 2
  });

    /* 1 stars */

  $('.stars_one').starrr({
    readOnly: true,
    max: 5,
    rating: 1
  });
  
    /* 0 stars */

  $('.stars_read').starrr({
    readOnly: true,
    max: 5,
    rating: 0
  });
  
  $('.stars .fa-star').click(function(e) {
    e.preventDefault();
  })

    /* mob rating in itms - only for read */

    $('.stars_itms').starrr({
      readOnly: true,
      max: 5,
      rating: 4
    })

  // vars for filter

  var currRating = 0;
  
  $('.stars_filter').starrr({
    max: 5,
    change: function(e, value){
      if (value) {
        currRating = value;
      } else {
        currRating = 0;
      }
      // testing
      console.log(currRating);
    }
  });



  // toggle SEO txt

  $('.butt_txt').click(function() {
    $(this).find('img').toggleClass('img_rotate');
    if ($('.seo_txt').hasClass('blur')) {
      $('.seo_txt').animate({
          'max-height': $('.seo_txt').get(0).scrollHeight
          }, function () {
              $(this).removeClass('blur');
              $('.butt_txt').find('.more').fadeOut();
              $('.butt_txt').find('.less').fadeIn();
          }
      )
    }
    else {
      $('.seo_txt').animate({
            'max-height': '90'
        }, function () {
            $(this).addClass('blur');
            $('.butt_txt').find('.more').fadeIn();
            $('.butt_txt').find('.less').fadeOut();
        }
      )
    }
    $(this).find('.less').fadeIn();
    $(this).find('.more').fadeOut();
  })


  // INPUT RANGE

  $('#inputRange').on('input', function() {

    var controlVal = $(this).val();

    $('.res_bl').find('span').text(controlVal)
  
  });

  // HUMBURGER

  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('.mob_mnu').fadeToggle();
    $('.head_mob').toggleClass('head_toggle_mob');
  })

  // nice select filter

  $('.select_rating').niceSelect();

  // toggle mob filters
  
  $('.filter_but .full_space').click(function() {
    $(this).parent().addClass('filter_but_open');
    $('.filters_mob_wr').addClass('filters_mob_wr_open');
  })

  $('.filter_but .open').click(function(e) {
    $(this).parent().removeClass('filter_but_open');
    $('.filters_mob_wr').removeClass('filters_mob_wr_open');
  })

  
  var starMob = $('.star_mob'); 
  
  // wondow resize

  if( $(window).width() < 768 ) {
    
    $('.rating_main_slider_wrap').slick('unslick');
    $('.items_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      rows: 0,
      prevArrow: '<button type="button" class="prev_mob"><img src="img/chevron-left.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="next_mob"><img src="img/chevron-left.svg" alt="arrow"></button>',
      fade: true
    });

    $('.items_slider').each(function() {
      var prevButt = $(this).find('.prev_mob');
      var nextButt = $(this).find('.next_mob');
      $(this).parent().find('.nav_mob').append(prevButt);
      $(this).parent().find('.nav_mob').append(nextButt);
    })


    // serach mobile open + close

    $('.search_mobile').click(function() {
      $('.search_top').slideDown();
    })

    $('.search_top .close_search').click(function() {
      $('.search_top').slideUp();
    })

  }



  if($(window).width() > 768) {

    // serach mob mnu

    /* open */
    
    $('.butt_open_search').click(function() {
      $(this).parent().parent().addClass('open_search_bl');
      $(this).css('display', 'none');
      $('.search_mobile .close_search').css('display', 'block');
      $('.search_mobile .show_inp').css('display', 'block');
      $('.search_mobile .butt_search_submit').css('display', 'block');
    })

    /* close */

    $('.search_mobile .close_search').click(function() {
      $(this).parent().parent().removeClass('open_search_bl');
      $('.search_mobile .butt_open_search').css('display', 'block');
      $('.search_mobile .close_search').css('display', 'none');
      $('.search_mobile .show_inp').css('display', 'none');
      $('.search_mobile .butt_search_submit').css('display', 'none');
    })

  }


  // srcroll to

  $(".arr_down img").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scroll_to").offset().top - 50
    }, 1000);
  });

  // for svg color
  
  $('.svg').click(function() {
    $(this).each(function(){
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
  
      console.log($img);
    })
  })




  // SLICK AND PROGGRESS NAV

  var time = 2;
  var $bar,
    $slick,
    isPause,
    tick,
    percentTime;

  // $slick = $('.slider');
  // $slick.slick({
  //   arrows: true,
  //   speed: 1200,
  //   adaptiveHeight: false
  // });

  // $bar = $('.main_right_nav');

  // function startProgressbar() {
  //   resetProgressbar();
  //   percentTime = -90;
  //   percentTime2 = 90;
  //   isPause = false;
  //   tick = setInterval(interval, 30);
  // }

  // function interval() {
  //   if (isPause === false) {
  //     percentTime += 1 / (time + 0.1);
  //     percentTime2 -= 1 / (time + 0.1);
  //     $bar.css({
  //       backgroundImage: "linear-gradient(" + percentTime2  +"deg, #028cd5 50%, transparent 50%), linear-gradient(" + percentTime  +"deg, #028cd5 50%, #ddd 50%)"
  //     });
  //     if (percentTime >= 90 && percentTime2 <= 90) {
  //       $('.rating_main_slider_wrap').slick('slickNext');
  //       startProgressbar();
  //     }
  //     console.log(percentTime);

  //   }
  // }

  // function resetProgressbar() {
  //   $bar.css({
  //     backgroundImage: "linear-gradient(90deg, #028cd5 50%, transparent 50%), linear-gradient(" + 90  +"deg, #028cd5 50%, #ddd 50%)"
  //   });
  //   clearTimeout(tick);
  // }

  // startProgressbar();

  // $('.slick-next, .slick-prev').click(function() {
  //   startProgressbar();
  // });



});

$(window).on('load', function() {

  // var mainSliderCount = $('.rating_main_slide').length;

  $('.slick-dots').appendTo('.curr_slide');

  // function sliderIndicator(slideCount) {
  //   for(var i = 0; i < slideCount; i++) {
  //     $('.curr_slide').append('<div class="slide_line"></div>');
  //   }
  // }

  // sliderIndicator(mainSliderCount);



//     AOS.init({
//       once: true
//     });
});
