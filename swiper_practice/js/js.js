// con02 스와이퍼
$(function(){

    var swiper_con01 = new Swiper(".mySwiper.con1", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",

        },
        navigation: {
            nextEl: ".swiper-button-next.con01_next",
            prevEl: ".swiper-button-prev.con01_prev",
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