$(function () {

    var swiper_sec_con2 = new Swiper(".mySwiper.sec_con2", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {

            // /* history1-pagination이름을 정해줘야 위치 이동과 스타일 바꿀수 있음 */
            el: ".history1-pagination",
            clickable: 'true'
        },

        navigation: {
            // 이름을 정해줘야 위치 이동과 스타일 바꿀수 있음
            nextEl: ".history1_next",
            prevEl: ".history1_prev",
        },

    });
});




// 
$(function () {
    var swiper_sec_con3 = new Swiper(".mySwiper.sec_con3", {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {

            // /* history1-pagination이름을 정해줘야 위치 이동과 스타일 바꿀수 있음 */
            el: ".history2-pagination",
            clickable: 'true'
        },

        navigation: {
            // 이름을 정해줘야 위치 이동과 스타일 바꿀수 있음
            nextEl: ".history2_next",
            prevEl: ".history2_prev",
        },

    });
});






// 스크롤 위치 및 메뉴 클릭시 클래스 on 붙이는 제이쿼리 스크립트
// https://www.youtube.com/watch?v=vh5hDOjeVvk

// $(function(){
//     var $menu = $('.nav p'),
//         $contents = $('.con');

//     // .nav p를 클릭하면 해당 요소에만 클래스명 on 추가
//     $menu.click(function(){
//         $menu.removeClass('on');
//         $(this).addClass('on');

//         // .nav p를 클릭하면 같은 인덱스 번호인 .section의 위치로 가기
//         var idx = $(this).index(); //idx은 변수 menu의 인덱스 번호
//         var section = $contents.eq(idx); //section은 변수 contents의 인덱스 번호인데 idx와 동일한 인덱스 번호를 가져와라는 뜻
//         var sectionDistance = section.offset().top; //sectionDistance은 변수section의 top값 
//         $('html,body').stop().animate({scrollTop:sectionDistance});//.nav p 클릭시 같은 인덱스 번호인 섹션의 스크롤 길이 만큼 양을 줘서 해당 섹션으로 움직임
//     });

//     $(window).scroll(function(){ //스크롤하면
//         $contents.each(function(){
//             if($(this).offset().top <= $(window).scrollTop()){ //각 섹션의 탑값모다 스크롤 을 많이이하면
//                 var idx = $(this).index(); //그 인덱스 번호를 가져오고
//                 $menu.removeClass('on'); // 다른데 붙은 on 제거하고
//                 $menu.eq(idx).addClass('on'); // 현재 같은 메뉴 인덱스 번호의 클래스에 on 추가 해라
//             }
//         });
//     });
// });








// 스크롤 위치 및 메뉴 클릭시 클래스 on 붙이는 제이쿼리 스크립트
// https://www.youtube.com/watch?v=vh5hDOjeVvk

$(function () {
    var menu = $('.nav p');
    var contents = $('.section.con');

    // .nav p를 클릭하면 해당 요소에만 클래스명 on 추가
    menu.click(function () {
        menu.removeClass('on');
        $(this).addClass('on');

        // .nav p를 클릭하면 같은 인덱스 번호인 .section의 위치로 가기
        var idx = $(this).index(); //변수idx은  menu의 인덱스 번호

        var section = contents.eq(idx); //section은 변수 contents의 인덱스 번호인데 idx와 동일한 인덱스 번호를 가져와라는 뜻
        var sectionDistance = section.offset().top; //sectionDistance은 변수section의 top값 
        $('html,body').stop().animate({ scrollTop: sectionDistance });//.nav p 클릭시 같은 인덱스 번호인 섹션의 스크롤 길이 만큼 양을 줘서 해당 섹션으로 움직임
    });

    $(window).scroll(function () { //스크롤하면
        contents.each(function () {
            if ($(this).offset().top <= $(window).scrollTop()) { //각 섹션의 탑값모다 스크롤 을 많이이하면
                var idx = $(this).index(); //그 인덱스 번호를 가져오고
                menu.removeClass('on'); // 모든 메뉴 항목에서 'on' 클래스를 제거합니다. 이는 현재 활성화된 메뉴 항목을 초기화하는 역할을 합니다.
                menu.eq(idx).addClass('on'); // 현재 같은 메뉴 인덱스 번호의 클래스에 on 추가 해라
            }
        });
    });
});




// 나중에 붙여 쓸땐 이걸로
// $(function () {
//     var menu = $('.nav p');
//     var contents = $('.section.con');


//     menu.click(function () {
//         menu.removeClass('on');
//         $(this).addClass('on');


//         var idx1 = $(this).index(); 
//         var section = contents.eq(idx1); 
//         var sectionDistance = section.offset().top;
//         $('html,body').stop().animate({ scrollTop: sectionDistance });
//     });

    
//     $(window).scroll(function () { 
//         contents.each(function () {
//             if ($(this).offset().top <= $(window).scrollTop()) { 
//                 var idx2 = $(this).index();
//                 menu.removeClass('on'); 
//                 menu.eq(idx2).addClass('on'); 
//             }
//         });
//     });
// });













// nav 클릭시 이동
// $(function () {
//     $('.history_part').on('click', function () {
//         var historyPart = $('.section.con01').offset().top;
//         $('html, body').animate({ scrollTop: (historyPart) }, 400);//400속도로 부드럽게 처리 해라
//     });

//     $('.second_part').on('click', function () {
//         var secondPart = $('.section.con02').offset().top;
//         $('html, body').animate({ scrollTop: (secondPart) }, 400);//400속도로 부드럽게 처리 해라
//     });

//     $('.last_part').on('click', function () {
//         var lastPart = $('.section.con03').offset().top;
//         $('html, body').animate({ scrollTop: (lastPart) }, 400);//400속도로 부드럽게 처리 해라
//     });
// });



// $(function () {
//     $('.nav p').on('click', function () {
//         var index = $(this).index();

//         $('.nav p').removeClass('on')
//         $('.nav p:eq(' + index + ')').addClass('on')

//     });

// });
