
// 자바스크립트
// const view = document.querySelector(".view");
// const div = document.querySelector(".container");

// document.addEventListener('mousemove', function (e) {
//     let x = e.clientX;
//     let y = e.clientY;


//     view.style.top = y - 75 + "px";  //-75빼는 이유 도형이 마우스 가운데 오기 위해서, y랑 75는 숫자열 "px"는 문자열로 간주. 문자열은 ""안에 들어감
//     view.style.left = x - 75 + "px"; 

// })


// div.addEventListener('mouseenter', function () {
//     view.classList.add("on")
// })

// div.addEventListener('mouseleave', function () {
//     view.classList.remove("on")
// })




// 제이쿼리
$(function () {
    const view = $(".view"); 
    const div = $(".container");

    $(document).mousemove(function (e) {

        let x = e.clientX;
        let y = e.clientY;

        view.css({
            top: y - 75 + "px", //-75빼는 이유 도형이 마우스 가운데 오기 위해서, y랑 75는 숫자열 "px"는 문자열로 간주. 문자열은 ""안에 들어감
            left: x - 75 + "px"
        });
    });

    div.mouseenter(function () {
        view.addClass("on");
    });

    div.mouseleave(function () {
        view.removeClass("on");
    });
});