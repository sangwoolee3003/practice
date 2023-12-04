$(function(){
    $('.list_num li').on('click', function(){
        var index = $(this).index();

        $('.list_num li').removeClass('on');
        $('.contents li').removeClass('on');

        $('.list_num li:eq('+ index +')').addClass('on')
        $('.contents li:eq('+ index +')').addClass('on')
    })
});



