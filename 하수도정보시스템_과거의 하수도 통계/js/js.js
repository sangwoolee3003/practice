$(function(){
    $('li.num').on('click', function(){

        var index = $(this).index();

        $('li.num').removeClass('on');
        $('li.num:eq('+ index +')').addClass('on')

    })
});