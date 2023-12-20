$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next.rn",
            prevEl: ".swiper-button-prev.lp",
        },
        pagination: {
            el: ".swiper-pagination.main_page",
        },
    })
});


$(function(){
    var small_icon_box1 = new Swiper(".swiper.small_icon_box1", {
        slidesPerView: "4",
        spaceBetween: 20,
        // centeredSlides : true,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next.smr",
            prevEl: ".swiper-button-prev.sml",
        },
    })
});


$(function(){
    var small_icon_box2 = new Swiper(".swiper.small_icon_box2", {
        slidesPerView: "4",
        spaceBetween: 20,
        // centeredSlides : true,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next.smr2",
            prevEl: ".swiper-button-prev.sml2",
        },
    })
});