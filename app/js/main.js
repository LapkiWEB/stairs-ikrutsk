new WOW().init();

$(document).ready(function () {
  $('.menu__wrapper').click(function () {
    if (!$('.menu__wrapper').hasClass('openDone')) {
      $('.menu__wrapper').addClass('openDone');
      $('nav').css("right", "0px");
    } else {
      $('.menu__wrapper').removeClass('openDone');
      $('nav').css("right", "-310px");
    }
  });

  $(window).resize(function () {
    if ($(window).width() > 1250) {
      $('nav ul li').removeAttr('style');
    }
  });
});

$('.global-slider__inner').slick({
  prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
  nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [{
      breakpoint: 1150,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});
