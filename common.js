$(function() {




  // parallax on mian page 

  $('.desc_comp').parallax({imageSrc: '/wp-content/themes/wsf/app/img/main/bg-1920.jpg'});

  // Equal Height for flat img
  
  $('.fl_img').equalHeights();


  $('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    dots: false,
    // arrows: false,
    // prevArrow: false,
    nextArrow: '.arr_next',
    prevArrow: false,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{

      breakpoint: 768,
      settings: {
        dots: true,
      }

    }
]
  });


  $('.fl_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    rows: 0,
    dots: false,
    prevArrow: '.flat_sort .l_arr',
    nextArrow: '.flat_sort .r_arr',
    speed: 500,
    responsive: [{

          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
    
        },
        {

          breakpoint: 570,
          settings: {
            slidesToShow: 1,
          }
    
        }
    ]
  });


  // POPUP 

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


  $('.input-container input').blur(function(event) {
    var inputVal = this.value;
    
    if (inputVal) {
      this.classList.add('value-exists');
    } else {
      this.classList.remove('value-exists');
    }
  });


  if ($(window).width() < 1024) {

    $('.title_wr').clone().appendTo('.bg_bl');

    $('.bg_bl').find('.title_wr').addClass('show_title');

    $(window).scroll(function() {

      if ($(this).scrollTop() > $(this).height()) {
        $('.menu_itms').addClass('head_scroll');
      } else {
        $('.menu_itms').removeClass('head_scroll');
      }

    });

  }

  if ($(window).width() < 570) {
    $('.about_numb').addClass('hide_num').clone().prependTo('.numb_sm');
    $('.numb_sm').find('.about_numb').removeClass('hide_num');
  }



  //
  
  $('.quest_wr .button').click(function() {
    var name = $(this).parent().find('input[name=name]').val();
    var phone = $(this).parent().find('input[name=phone]').val();
    $('#small-dialog2').find('input[name=name]').val(name);
    $('#small-dialog2').find('input[name=phone]').val(phone);
  })

  // AJAX FORM CALL

  $('.forms').on('submit', function (e) {

    e.preventDefault();

    $this = $(this);
    var name = $this.find('input[name="name"]').val() ? $this.find('input[name="name"]').val() : null;
    var phone = $this.find('input[name="phone"]').val() ? $this.find('input[name="phone"]').val() : null;
    var mail = $this.find('input[name="email"]').val() ? $this.find('input[name="email"]').val() : null;
    var soc = $this.find('input[type="radio"]:checked').val() ? $this.find('input[type="radio"]:checked').val() : null;
    var message = $this.find('textarea[name="message"]').val() ? $this.find('textarea[name="message"]').val() : null;
    var subject = $this.find('h2').text() ? $this.find('h2').text() : null;

    $.ajax({
      type: "POST",
      url: '/wp-admin/admin-ajax.php',
      data: {
        action: 'do_something_call',
        name: name,
        phone: phone,
        mail: mail,
        soc: soc,
        message: message,
        subject: subject,
        url: location.href
      },
      beforeSend: function () {
        $this.fadeOut();
      },
      success: function () {
        $this.parent().find('.succes_pop').fadeIn();
        setTimeout(function () {
          $.magnificPopup.close();
        }, 5000);
        // $this.delay(500).addClass('form_success');
        // $this.find('.success').css('display', 'flex');
      }
    });
  });

  $('.order_mess').on('submit', function (e) {

    e.preventDefault();

    $this = $(this);
    var name = $this.find('input[name="name"]').val() ? $this.find('input[name="name"]').val() : null;
    var phone = $this.find('input[name="phone"]').val() ? $this.find('input[name="phone"]').val() : null;
    var mail = $this.find('input[name="email"]').val() ? $this.find('input[name="email"]').val() : null;
    var soc = $this.find('input[type="radio"]:checked').val() ? $this.find('input[type="radio"]:checked').val() : null;
    var message = $this.find('textarea[name="message"]').val() ? $this.find('textarea[name="message"]').val() : null;
    var subject = $this.find('h2').text() ? $this.find('h2').text() : null;

    $.ajax({
      type: "POST",
      url: '/wp-admin/admin-ajax.php',
      data: {
        action: 'do_something_call',
        name: name,
        phone: phone,
        mail: mail,
        soc: soc,
        message: message,
        subject: subject,
        url: location.href
      },
      beforeSend: function () {

      },
      success: function () {
        $('.order_mess *').fadeOut();
        $('.order_mess').find('.success_inline').fadeIn();
        // $this.parent().find('.succes_pop').fadeIn();
        // setTimeout(function () {
        //   $.magnificPopup.close();
        // }, 5000);
        // $this.delay(500).addClass('form_success');
        // $this.find('.success').css('display', 'flex');
      }
    });
  });






 
  // // AOS animation 

  // if ($(window).width() > 768) {

  //   $('.prog_title .img_wrap_all .circle_alone').attr('data-aos', 'zoom-in').attr('data-aos-delay', '1000').attr('data-aos-duration', '1000');

  
  // }


  // var $windWidth = $(window).width();


  // if ($windWidth >= 1280) {
  //     $('.slide_medium').remove();
  // } 


	// var $main = $('.main-slider');

  // $main.slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     rows: 0,
  //     dots: true,
  //     customPaging: function(slider, i) {
  //         $(slider.$slides[i]).data();
  //         return '<button>' + '0' + (i + 1) + '</button>';
  //     },
  //     prevArrow: false,
  //     nextArrow: '<button type="button" class="slick-next"></button>',
  //     fade: true,
  //     cssEase: 'linear',
  //     speed: 500,
  //     // autoplay: true,
  //     autoplaySpeed: 5000
  // });

  // $('.slider_adv1_init').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var i = (currentSlide == 4 ? 2 : 1);
  //   var j = (currentSlide ? currentSlide : 0) + 1;
  //   var k = slick.slideCount - 3;
  // });




  // $('.slider_detals').slick({
  //   prevArrow: '.s_prog_about .slide_prev',
  //   nextArrow: '.s_prog_about .slide_next',
  //   infinite: false,
  //   responsive: [{

  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 1,
  //       // infinite: true,
  //       row: 2
  //     }

  //   },
  //   {

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       // dots: true,
  //       row: 1
  //     }

  //   },
  //   {

  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       // dots: true,
  //       row: 1
  //     }

  //   },
  //   ]
  // });


  // $('.slider_accomp').slick({
  //   slidesToScroll: 4,
  //   slidesToShow: 4,
  //   prevArrow: '.s_accomplishment .slide_prev',
  //   nextArrow: '.s_accomplishment .slide_next',
  //   infinite: false,
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },
  //   ]
  // });

  // $('.slider_flats').slick({
  //   slidesToShow: 3,
  //   centerPadding: '80px',
  //   prevArrow: '.slide_prev',
  //   nextArrow: '.slide_next',
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  //   ]
  // });

  // $('.cond_slider').slick({
  //   slidesToShow: 3,
  //   // centerPadding: '80px',
  //   prevArrow: '.cond_pr',
  //   nextArrow: '.cond_next',
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  //   ]
  // });






  $('form :submit').on('click', function () {
      $('input:required').each(function () {
          if (!$(this).val()) $(this).addClass('incomplete');
      });
  });

  $('input:required').on('input', function () {
      $(this).removeClass('incomplete');
  });

  $('input[name=phone]').mask("+38 (999) 999-9999", {
      completed: function () {
          $(this).removeClass('incomplete');
      }
  });

  $('input[name=name]').on('input', function () {
      $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
  });



  $('#my-menu').click(function() {
    $('.mob_mnu').toggleClass('mob_visible');
    $('.hamburger').toggleClass('is-active');
  })



  // POPUP 

  // $('.popup-with-move-anim').magnificPopup({
  //   type: 'inline',

  //   fixedContentPos: false,
  //   fixedBgPos: true,

  //   overflowY: 'auto',

  //   closeBtnInside: true,
  //   preloader: false,
    
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-slide-bottom'
  // });

  // FORM CALL

  // $('.input-container input').blur(function(event) {
  //   var inputVal = this.value;
    
  //   if (inputVal) {
  //     this.classList.add('value-exists');
  //   } else {
  //     this.classList.remove('value-exists');
  //   }
  // });


 // SCROLL SMOOTH

  // try {
  //   $.browserSelector();
  //   if($("html").hasClass("chrome")) {
  //     $.smoothScroll();
  //   }
  // } catch(err) {

  // };

  // $("img, a").on("dragstart", function(event) { event.preventDefault(); });



});

$(window).on('load', function() {

  $('.container_preload').delay(1000).fadeOut();

//     AOS.init({
//       once: true
//     });
});
