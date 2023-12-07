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




// fullpage 사용시 풀페이지 사용 부분의 class를 section으로 지정해주고 div#fullpage로 묶어주어야함
//https://jineecode.tistory.com/98
$(function(){
    $('#fullpage').fullpage({
        scrollBar: true,
        anchors: ['anchor1', 'anchor2', 'anchor3'],
        menu: '#menu_circle',
        responsiveWidth: 769,
    });
});

