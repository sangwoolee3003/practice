$(function(){
    $('.dept_01').on('mouseenter', function(){
        $('.dept_02').addClass('on');
        $('.nav_bg').addClass('on');

    });
}); 



$(function(){
    $('.nav').on('mouseleave', function(){
        $('.dept_02').removeClass('on');
        $('.nav_bg').removeClass('on');
    });
}); 




$(function () {

    var swiper_visaul_con = new Swiper(".mySwiper.visaul_con", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {

            el: ".visaul-pagination",
            clickable: 'true'
        },

        navigation: {
            nextEl: ".visaul_next",
            prevEl: ".visaul_prev",
        },

    });
});



