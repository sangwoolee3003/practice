// window.onload = function(){
//     // 01.gnb애니메이션

//     const menuOpen = document.querySelector('.gnb .menuOpen');
//     const menuBox = document.querySelector('.gnb .menuBox');

//     menuOpen.addEventListener('click', () => { //쌤(강의) 방법
//          menuBox.classList.toggle('on');

//     });
// }



    // // 자바스크립트 방법
    // // 01.gnb애니메이션
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', function(){ //내방법
        menuBox.classList.toggle('on');
    });





// // 제이쿼리 방법
// // 01.gnb애니메이션
// $(function(){
//     $('.menuOpen').on('click',function(){
//         $('.menuBox').toggleClass('on');
//     });

// });