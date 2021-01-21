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

        // AOS
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
            initClassName: "aos-init", // class applied after initialization
            animatedClassName: "aos-animate", // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: "ease", // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
            // 基本的AOS參數設定值：
            // offset: 120, // 以像素(px)為單位，水平移動
            // delay: 0, //延遲時間，範圍：0~ 3000
            // duration: 400, //動畫時間，範圍：0~ 3000
            // easing: ‘ease’, // 動畫速率效果
            // once: false, // 是否重複觸發動畫
            // mirror: false, // 是否超過滾動範圍時，做移出的動畫效果
            // anchorPlacement: ‘top - bottom’, // 滾動方向觸發動畫，預設由上到下
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