// common js
// 1. nav>gnb 복제
// 2. 복제대상을 변수 저장
// 3. m_nav_wrap 위 변수 붙여넣기
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
//복제대상.cloneNode() //괄호안 true 자식, 자손 추가 복제
console.log(gnb, m_wrap, gnbClone)
//복제 gnb 붙여넣기
m_wrap.appendChild(gnbClone)
// main-nav (jquery)
// sub, sub_bg 숨기기
$('nav .sub').hide()
$('nav .sub_bg').hide()
// 2. nav 마우스 오버 시 sub 보이기
$('nav').on('mouseover', function(){
    $('nav .sub').stop(true).slideDown(300)
    $('nav .sub_bg').stop(true).slideDown(300)
    /* $('.sub').show()
    $('nav .sub_bg').show() */
})
$('nav').on('mouseout', function(){
    $('.sub').stop(true).slideUp(300)
    $('nav .sub_bg').stop(true).slideUp(300)
    /* $('.sub').hide()
    $('nav .sub_bg').hide() */
})
// mobile menu
// 1. 모바일 메뉴 숨기기
$('.m_nav_wrap .gnb').hide();
//0. 모바일 메뉴의 현재 상태를 알기 위한 논리형 데이터 생성
var m_nav_state = true;
// 2. 전체메뉴 아이콘 클릭 시
$('.m_nav').on('click', function(){
    m_nav_state = !m_nav_state
    console.log(`현재 상태는 : ${m_nav_state}`)
    // 2-1. (모바일 메뉴가 숨겨진 상태라면) 보이기
    if(m_nav_state == false) {
        $('.m_nav_wrap .gnb').show();
        //m_nav_state = true //상태변경
    }
    // 2-2. (모바일 메뉴가 보이는 상태라면) 숨기기
    else{$('.m_nav_wrap .gnb').hide();
        //m_nav_state = false //상태변경
    }
})
