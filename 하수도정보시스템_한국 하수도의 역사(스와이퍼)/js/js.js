$(function(){

    var swiper_sec_con2 = new Swiper(".mySwiper.sec_con2", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {

            // /* history1-pagination이름을 정해줘야 위치 이동과 스타일 바꿀수 있음 */
            el: ".history1-pagination",
            clickable: 'true'
        },

        navigation: {
            // 이름을 정해줘야 위치 이동과 스타일 바꿀수 있음
            nextEl: ".history1_next",
            prevEl: ".history1_prev",
        },

    });
});

