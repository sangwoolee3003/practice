// window.onload = function(){
//     // 01.gnb애니메이션

//     const menuOpen = document.querySelector('.gnb .menuOpen');
//     const menuBox = document.querySelector('.gnb .menuBox');

//     menuOpen.addEventListener('click', () => { //쌤(강의) 방법
//          menuBox.classList.toggle('on');

//     });
// }




    // 01.gnb애니메이션
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', function(){ //내방법
        menuBox.classList.toggle('on');
    });



