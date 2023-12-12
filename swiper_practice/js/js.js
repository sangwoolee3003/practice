
// con01 스와이퍼
$(function(){

    var swiper_con01 = new Swiper(".mySwiper.con1", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",

        // },
        navigation: {
            nextEl: ".swiper-button-next.con01_next",
            prevEl: ".swiper-button-prev.con01_prev",
        },

        mousewheel: {
            thresholdDelta: 100 //마우스 휠을 사용하여 슬라이드를 제어할 수 있도록 설정합니다. thresholdDelta는 마우스 휠 동작의 감도를 조절하는 값입니다.
        },
    });


});


// con02 스와이퍼
$(function(){

    var swiper_con02 = new Swiper(".mySwiper.con2",  {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


