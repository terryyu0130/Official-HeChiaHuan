(function () {

    $(document).ready(function () {
        // header btn
        $('.header .btn').on('click', function () {
            $(this).toggleClass('active');
            $('.menu-left').toggleClass('active');
            $('.menu-right').toggleClass('active');
        });

        // $('.header .item').on('click',function(){
        //     $(this).toggleClass('active');
        // });

        // QA-list arrow
        $('.QA-list .arrow').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().siblings().slideToggle();
            $(this).parent().parent().siblings().find('.text').slideUp();
            $(this).parent().parent().siblings().find('.text-pic').slideUp();
            $(this).parent().parent().siblings().find('.arrow').removeClass('active');
        });

        //Meun arrow
        $('.menu-arrow').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().siblings('.nav-wrap').slideToggle(800);
            $(this).parent().parent().siblings().find('.menu-arrow').removeClass('active');
            $(this).parent().parent().siblings().find('.nav-wrap').slideUp(400);
        });

        //pic-modal
        $('.order-menu .close').on('click', function () {
            $('.pic-modal').fadeOut();
        });
        $('.main-pic').on('click', function () {
            $('.pic-modal').fadeIn();
        });

        //news hover to active
        $('.news-list .pic').on('click', function () {
            $(this).toggleClass('active');
        });

        //menu hover to active
        // $('.order-menu .nav').on('click',function(){
        //     $(this).toggleClass('active');
        // });

        //fan hover to active
        $('.fan-content .photo').on('click', function () {
            $(this).toggleClass('active');
        });

        //openData
        var openData = document.querySelector('.openData');
        var data;
        const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = 'http://opendataap2.hl.gov.tw/resource/files/2020-12-25/c52ca4ca56bbad92e58a0774ea118be6.json';

        axios.get(`${cors}${url}`).then(function (response) {
            data = response.data;
            // console.log(data);
            getPlan();
        });

        function getPlan() {
            var str = '';
            var count = 0;
            data.forEach(function (openData) {
                // console.log(openData.Name);
                var planContent;
                if (openData.Name !== null) {
                    planContent = `<li class='project'>
                    <img class='random' src="https://picsum.photos/id/${13 + count}/400/300" alt="">
                    <div class='text'>
                    <div class='planName'>${openData.Name}</div>
                    <div class='description'>${openData.Description}</div>
                    <div class='website'><a href='${openData.Website}' target='_blank' class='link-color'>查看更多</a></div>
                    </div>
                    </li>`;
                    str += planContent;
                    count += 1;
                }
                else {
                    return;
                }
                console.log(count);
            });
            openData.innerHTML = str;
        }
    });
})();