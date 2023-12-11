$(function(){
    $('.gnb').on('mouseenter', function(){
        $('header').addClass('on');
        $('.deps_02').addClass('on');
        $('.gnb_bg').addClass('on');

    })
    
});


$(function(){
    $('.gnb').on('mouseleave', function(){
        $('header').removeClass('on');
        $('.deps_02').removeClass('on');
        $('.gnb_bg').removeClass('on');

    })
});