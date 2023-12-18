$(function(){
    $('#fullpage').fullpage({
        scrollBar: true,
        normalScrollElements: '.scrollable-content', //해당 클래스 안에서는 fullpage 스크롤 안먹힘
        
    });
});



$(function(){

    var swiper01 = new Swiper(".mySwiper.swiper01", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        mousewheel: {
            thresholdDelta: 70 
        },
    });
});


