

/*===========================
スリックスライダー
===========================*/
/* MV */
$(document).ready(function(){

	$('.mv_slider_wrapper').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 4500,
		speed: 800,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false
	});

});


//ページトップボタン表示・非表示用
/*$(function() {
    var topBtn = $('.pagetopButton');
    topBtn.hide();
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});*/


//ナビゲーション表示・非表示用
$(function() {
    var floatNavi = $('.floatNaviWrap');
    floatNavi.hide();
        if ($(this).scrollTop() > 600) {
            floatNavi.fadeIn();
        } else {
            floatNavi.fadeOut();
        }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            floatNavi.fadeIn();
        } else {
            floatNavi.fadeOut();
        }
    });
});



$(function() {
        // フェードイン
        $('.inviewfadeIn').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('fadeIn');
            } else {
                $(this).stop().removeClass('fadeIn');
            }
        });

        // 上へスライド
        $('.inviewUp').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('Up');
            } else {
                $(this).stop().removeClass('Up');
            }
        });
        // ズームイン
        $('.inviewzoomIn').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('zoomIn');
            } else {
                $(this).stop().removeClass('zoomIn');
            }
        });
        // フェードインしながら右へスライド
        $('.inviewfadeInLeft').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('fadeInLeft');
            } else {
                $(this).stop().removeClass('fadeInLeft');
            }
        });
        // フェードインしながら左へスライド
        $('.inviewfadeInRight').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('fadeInRight');
            } else {
                $(this).stop().removeClass('fadeInRight');
            }
        });
		// フェードインしながら上へスライド
        $('.inviewfadeInUp').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('fadeInUp');
            } else {
                $(this).stop().removeClass('fadeInUp');
            }
        });
		// フェードインしながら左へスライドバウンド
        $('.inviewbounceInRight').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('bounceInRight');
            } else {
                $(this).stop().removeClass('bounceInRight');
            }
        });
    });



