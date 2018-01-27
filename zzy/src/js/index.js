
// (window.onresize = function () {
// 	// body...
// 	var banner_img = document.getElementById('zzy-banner-img');
// 	var banner = document.getElementById('zzy-banner');
// 	var banner_h = banner_img.offsetHeight;
// 	banner.style.height = banner_h+"px";
// })();



$(function(){
	$(".zzy-tab-li").click(function(){
		var index = $(this).index();
        var tab_active_len = $(".zzy-tab-line-active").width();
        console.log(tab_active_len);
		$(this).find("a").attr("class","zzy-tab-active").parent().siblings("li").find("a").attr("class","");
		$(".zzy-panel-li").eq(index).addClass("active").siblings(".zzy-panel-li").removeClass("active");
		$(".zzy-tab-line-active").css({
			transform:"translateX("+(tab_active_len*index)+"px)"
		});
	});
    $(".zzy-nav a").click(function(){
        $(this).addClass("zzy-active").siblings().removeClass("zzy-active");
    });
    $(".zzy-nav-list").click(function(){
        $(".zzy-nav").slideToggle();
        $(this).toggleClass("zzy-nav-list-1").toggleClass("zzy-nav-list");

    });
	 $(window).on('scroll', function () {
                if ($(window).scrollTop() > 200) {
                    $('#backtop').addClass('backtop');
                } else {
                    $('#backtop').removeClass('backtop');
                }
            });

     $('#backtop').on('click', function (e) {
                // html,body 都写是为了兼容浏览器
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
                 return false;
            });
})

