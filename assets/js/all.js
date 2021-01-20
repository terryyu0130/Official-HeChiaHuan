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
    }); //news hover to active

    $('.news-list .pic').on('click', function () {
      $(this).toggleClass('active');
    }); //menu hover to active
    // $('.order-menu .nav').on('click',function(){
    //     $(this).toggleClass('active');
    // });
    //fan hover to active

    $('.fan-content .photo').on('click', function () {
      $(this).toggleClass('active');
    }); //openData

    var openData = document.querySelector('.openData');
    var data;
    var cors = 'https://cors-anywhere.herokuapp.com/';
    var url = 'http://opendataap2.hl.gov.tw/resource/files/2020-12-25/c52ca4ca56bbad92e58a0774ea118be6.json';
    axios.get("".concat(cors).concat(url)).then(function (response) {
      data = response.data; // console.log(data);
      // document.body.innerHTML = JSON.stringify(message)

      getPlan();
    });

    function getPlan() {
      var str = ''; // message = Array.from(message);

      data.forEach(function (openData) {
        // console.log(openData.Name);
        if (openData.Name !== null) {
          var planContent = "<li class='project'>\n                    <div class='planName'><span class='text'>\u6D3B\u52D5\u540D\u7A31\uFF1A</span><span class='size'>".concat(openData.Name, "</span></div>\n                    <div class='description'><span class='text'>\u6D3B\u52D5\u5167\u5BB9\uFF1A</span><span class='test'>").concat(openData.Description, "</span></div>\n                    <div class='website'><span class='text'>\u53C3\u8003\u8CC7\u6599\uFF1A</span><a href='").concat(openData.Website, "' target='_blank' class='link-color'>").concat(openData.Name, "-\u6D3B\u52D5\u4ECB\u7D39</a></div>\n                    </li>");
          str += planContent;
        } else {
          return;
        }
      });
      openData.innerHTML = str;
    }
  });
})();
//# sourceMappingURL=all.js.map
