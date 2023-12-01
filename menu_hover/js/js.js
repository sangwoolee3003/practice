$(function(){
    $('.dept01').on('mouseenter', function(){
        $('.dept02').addClass('on');
        $('.gnb_bg').addClass('on');

    });
}); 



$(function(){
    $('.gnb').on('mouseleave', function(){
        $('.dept02').removeClass('on');
        $('.gnb_bg').removeClass('on');
    });
}); 




// gnb 호버시 로그인 부분 hide/show
$(function(){
    $('.gnb').on('mouseenter', function(){
        $('.login_box').hide();
    });

    $('.gnb').on('mouseleave', function(){
        $('.login_box').show();
    });
}); 



