// $(function(){
//     $('.bottom li').on('click', function(){
//         var index = $(this).index();

//         $('.bottom li .sub_tit:eq('+ index +')').toggle('on')
//         $('.tit::before('+ index +')').toggle('on')

//     })
// });


$(function(){
    $('.bottom li').on('click', function(){
        var index = $(this).index();

        $('.bottom li:eq('+ index +')').toggleClass('on')
    })
});