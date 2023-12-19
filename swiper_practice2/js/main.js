$(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        scrollbar: {
            el: ".swiper-scrollbar.scrolled",
            // hide: true,
        },

        pagination: {
            el: ".swiper-pagination.navigate",
            clickable: true,
        },
        
    });


});
