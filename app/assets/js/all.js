(function () {

    $(document).ready(function(){
        // header btn
        $('.header .btn').on('click',function(){
            $(this).toggleClass('active');
            $('.menu-left').toggleClass('active');
            $('.menu-right').toggleClass('active');
        });

        // $('.header .item').on('click',function(){
        //     $(this).toggleClass('active');
        // });

        // QA-list arrow
        $('.QA-list .arrow').on('click',function(){
            $(this).toggleClass('active');
            $(this).parent().siblings().slideToggle();
            $(this).parent().parent().siblings().find('.text').slideUp();
            $(this).parent().parent().siblings().find('.text-pic').slideUp();
            $(this).parent().parent().siblings().find('.arrow').removeClass('active');
        });

        //Meun arrow
        $('.menu-arrow').on('click',function(){
            $(this).toggleClass('active');
            $(this).parent().siblings('.nav-wrap').slideToggle(800);
            $(this).parent().parent().siblings().find('.menu-arrow').removeClass('active');
            $(this).parent().parent().siblings().find('.nav-wrap').slideUp(400);
        });

        //pic-modal
        $('.order-menu .close').on('click',function(){
            $('.pic-modal').fadeOut();
        });
        $('.main-pic').on('click',function(){
            $('.pic-modal').fadeIn();
        });

        //news hover to active
        $('.news-list .pic').on('click',function(){
            $(this).toggleClass('active');
        });

        //menu hover to active
        // $('.order-menu .nav').on('click',function(){
        //     $(this).toggleClass('active');
        // });

        //fan hover to active
        $('.fan-content .photo').on('click',function(){
            $(this).toggleClass('active');
        });

        //openData
        var openData = document.querySelector('.openData');
        var data;
        const cors = 'https://cors-anywhere.herokuapp.com/'
        const url = 'http://opendataap2.hl.gov.tw/resource/files/2020-12-25/c52ca4ca56bbad92e58a0774ea118be6.json';

        axios.get(`${cors}${url}`).then(function(response){
            data = response.data;
            // console.log(data);
            // document.body.innerHTML = JSON.stringify(message)
            getPlan();
        });

        function getPlan(){
            var str = '';
            // message = Array.from(message);
            data.forEach(function(openData){
                // console.log(openData.Name);

                if (openData.Name!==null) {
                    var planContent = `<li class='project'>
                    <div class='planName'><span class='text'>活動名稱：</span><span class='size'>${openData.Name}</span></div>
                    <div class='description'><span class='text'>活動內容：</span><span class='test'>${openData.Description}</span></div>
                    <div class='website'><span class='text'>參考資料：</span><a href='${openData.Website}' target='_blank' class='link-color'>${openData.Name}-活動介紹</a></div>
                    </li>`;
                str += planContent;
                }
                else {
                    return;
                }
            });
            openData.innerHTML = str;
        }
    });
})();