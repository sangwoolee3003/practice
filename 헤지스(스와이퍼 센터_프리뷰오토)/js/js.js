$(function(){

    var visual_slide = new Swiper(".visual_slide", {
        slidesPerView: "auto", 
        centeredSlides: true, 
        spaceBetween : 30,
        
        loop: true,
        
        pagination: {
            el: ".swiper-pagination.visual_num",
            type: "fraction",
        },

        scrollbar: {
            el: ".swiper-scrollbar.barPart",
        },
    });

});