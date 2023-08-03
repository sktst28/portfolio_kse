'use strict';


var wowJS = new WOW().init(); 

//wowrap
var wowrap = $('.wowrap');
$(wowrap).each(function () {
  $(this)
    .find('.wow')
    .each(function (index) {
      var eq = index / 8 + 's';
      $(this).attr('data-wow-delay', eq);
    });
  $(this)
    .find('.animated')
    .each(function (index) {
      var eq = index * 250;
      $(this).attr('data-id', 'delay-' + eq);
    });
});

//aos
AOS.init({
  duration: 1200,
  once: true,
});    


	// 윈도우 로드 시 실행할 이벤트 핸들러 등록
/*   window.addEventListener('load', function () {
    $(function () {
      
      Splitting();
    });
  });
 */
  $(window).scroll(function () {
   
  });

  //work 더보기 스크립트
  $(function () {
    $('.work-list__item').slice(0, 6).show(); // 최초 10개 선택

    $('.more-btn').click(function (e) {
      // Load More를 위한 클릭 이벤트e
      e.preventDefault();
      $('.work-list__item:hidden').slice(0, 6).show(); // 숨김 설정된 다음 2개를 선택하여 표시
      if ($('.work-list__item:hidden').length == 0) {
        $('.more-btn').hide();
      }
    });
  });
  
    $(window).scroll(function () {
      if ($(this).scrollTop() >= $('#sec-work').offset().top - 300) {
        $('#sec-work').addClass('active');      
      } else {
        $('#sec-work').removeClass('active');
      }

      if ($(this).scrollTop() >= $('#sec-contact').offset().top - 300) {
        $('.contact-text-wrap').addClass('on');
        $('.contact-link').addClass('on');   

        Splitting(); 
      } 
    });

  window.addEventListener('load', function () {
    var cover = document.getElementById('cover'),
      indexSec = document.getElementById('sec-intro'),
      text2 = document.getElementById('intro-text-2');

    //  애니메이션 실행 코드
    cover.style.animation = 'coverleft 2000ms both cubic-bezier(0.77, 0, 0.175, 1';

    setTimeout(function () {
      indexSec.classList.add('active');
    }, 1000);

    text2.addEventListener('animationend', function () {
      // 애니메이션이 끝난 후 실행될 코드
      text2.classList.add('on'); // 태그에 CSS 클래스 추가
    });
  });