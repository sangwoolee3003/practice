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





// 끝지점 알림
$(function(){
    $(window).scroll(function() {

        // 현재 스크롤 위치
        var scrollPosition = $(window).scrollTop();

        // 문서 전체의 높이
        var documentHeight = $(document).height();
        
        // 윈도우의 높이
        var windowHeight = $(window).height();

        // 스크롤이 페이지의 마지막에 도달했는지 확인
        if (scrollPosition >= documentHeight - windowHeight) {

          // 알림 표시
        alert("끝지점 입니다");
        }
    });
});



