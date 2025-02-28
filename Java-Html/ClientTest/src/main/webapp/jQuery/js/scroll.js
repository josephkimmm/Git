//1. <div id="bar"></div> 동적 추가
//2. CSS적용
//3. 이벤트 적용

$('<div id="bar"></div>')
    .css({
        width: 0,
        height: '7px',
        backgroundColor: 'cornflowerblue',
        postion: 'fixed',
        left: 0,
        top: 0,
        border: 0,
        padding: 0,
        margin: 0
    })
    .prependTo('body');

$(document).scroll(function(){
    
    // console.log(new Date());

    //스크롤바의 위치
    // document.title = $(document).scrollTop();

    //문서의 세로길이(스크롤바의 최대 위치): 100% 
    // = 스크롤바의 위치: x

    // document.title = $(document).outerHeight();

    let x = $(document).scrollTop() * 100 / ($(document).outerHeight()- $(window).outerHeight());// 스크롤위치에 따른 인디케이터 바의 넓이

    $('.scroll-bar-indicator').css('width', x + '%');
        
});
