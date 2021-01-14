"use strict";

(function () {
  $(document).ready(function () {
    // header btn
    $('.header .btn').on('click', function () {
      $(this).toggleClass('active');
      $('.menu-left').toggleClass('active');
      $('.menu-right').toggleClass('active');
    }); // $('.header .item').on('click',function(){
    //     $(this).toggleClass('active');
    // });
    // QA-list arrow

    $('.QA-list .arrow').on('click', function () {
      $(this).toggleClass('active');
      $(this).parent().siblings().slideToggle();
      $(this).parent().parent().siblings().find('.text').slideUp();
      $(this).parent().parent().siblings().find('.text-pic').slideUp();
      $(this).parent().parent().siblings().find('.arrow').removeClass('active');
    }); //Meun arrow

    $('.menu-arrow').on('click', function () {
      $(this).toggleClass('active');
      $(this).parent().siblings('.nav-wrap').slideToggle(800);
      $(this).parent().parent().siblings().find('.menu-arrow').removeClass('active');
      $(this).parent().parent().siblings().find('.nav-wrap').slideUp(400);
    }); //pic-modal

    $('.order-menu .close').on('click', function () {
      $('.pic-modal').fadeOut();
    });
    $('.main-pic').on('click', function () {
      $('.pic-modal').fadeIn();
    });
  });
})();
//# sourceMappingURL=all.js.map
