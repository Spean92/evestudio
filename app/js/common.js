$(document).ready(function() {


// Цвет полоски меню
	var box1 = $('.box-1').height();
	var box2 = $('.box-2>div').height();
	var box3 = $('.box-3').height();
	var pos1 = box1;
	var pos2 = pos1 + box2;
	var pos3 = pos2 + box3;
	var finalPos1 = pos1 + -'77';
	var finalPos2 = pos2 + -'15';
	var finalPos3 = pos3;
    var html = document.documentElement, body = document.body;

    function whiteBG() {
        if (body.scrollTop<finalPos1){
            $('.box-1').css('opacity', '1');
        } else if (body.scrollTop>finalPos1 && body.scrollTop<pos1) {
            $('.box-1').css('opacity', '1');
        }else if(body.scrollTop>finalPos1 && body.scrollTop<finalPos2) {
            $('.box-1').css('opacity', '0');
        } else if (body.scrollTop>finalPos2) {
            $('.box-1').css('opacity', '0');
        }
    };
    if ($(window).width()<768) {
        whiteBG();
        $(window).on('scroll', whiteBG);
    };
    function header() {
        // if (body.scrollTop<finalPos1){
        //     // $('#homeMenu').css('display','inline-block');
        //     // $('#aboutMenu').css('display','none');
        //     // $('#clientsMenu').css('display','none');
        //     $('header').removeClass('active');
        //     $('header').css('background', 'rgba(0, 0, 0, 0.5)');
        //     $('header #logo').attr('src', 'img/evestudio_logo_r_whire.svg');
        //     $('.bars.bars1').addClass('hide').removeClass('show');
        //     $('.menu').addClass('show').removeClass('hide');
        //     $('.menu nav ul li a').removeClass('wow fadeInDown');
        //     $('.menu nav ul li a').css('visibility','visible');
        //     $('.box-1 .bg').css('opacity', '1');
        //
        //
        // } else if (body.scrollTop>finalPos1 && body.scrollTop<pos1) {
        //     $('header').addClass('active');
        //     $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
        //     $('header.active').css('background', 'rgba(255, 255, 255, 1)');
        //     $('.bars.bars1').addClass('show').removeClass('hide');
        //     $('.menu').addClass('hide').removeClass('show');
        //     $('.menu nav ul li a').removeClass('wow fadeInDown');
        //     $('.box-1 .bg').css('opacity', '1');
        //
        //
        // }else if(body.scrollTop>finalPos1 && body.scrollTop<finalPos2) {
        //     // $('#homeMenu').css('display','none');
        //     // $('#aboutMenu').css('display','inline-block');
        //     // $('#clientsMenu').css('display','none');
        //     $('header').addClass('active');
        //     $('header.active').css('background', 'rgba(255, 255, 255, 0.7)');
        //     $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
        //     $('.bars.bars1').addClass('show').removeClass('hide');
        //     $('.menu').addClass('hide').removeClass('show');
        //     $('.menu nav ul li a').removeClass('wow fadeInDown');
        //     $('.box-1 .bg').css('opacity', '0');
        //
        //
        // } else if (body.scrollTop>finalPos2) {
        //     // $('#homeMenu').css('display','none');
        //     // $('#aboutMenu').css('display','none');
        //     // $('#clientsMenu').css('display','inline-block');
        //     $('header').addClass('active');
        //     $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
        //     $('.bars.bars1').addClass('show').removeClass('hide');
        //     $('.menu').addClass('hide').removeClass('show');
        //     $('.menu nav ul li a').removeClass('wow fadeInDown');
        //     $('.box-1 .bg').css('opacity', '0');
        // }

        if ($('#container').hasClass('modify')) {
            $('header').addClass('active');
            $('header.active').css('background', 'rgba(255, 255, 255, 0.7)');
            $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
            $('.bars.bars1').addClass('show').removeClass('hide');
            $('.menu').addClass('hide').removeClass('show');
            $('.menu nav ul li a').removeClass('wow fadeInDown');
            // $('.box-1 .bg').css('opacity', '0');
        } else {
            $('header').removeClass('active');
            $('header').css('background', 'rgba(0, 0, 0, 0.5)');
            $('header #logo').attr('src', 'img/evestudio_logo_r_whire.svg');
            $('.bars.bars1').addClass('hide').removeClass('show');
            $('.menu').addClass('show').removeClass('hide');
            $('.menu nav ul li a').removeClass('wow fadeInDown');
            $('.menu nav ul li a').css('visibility','visible');
            // $('.box-1 .bg').css('opacity', '1');
        }
        //  console.log(body.scrollTop);
    };

	// 	window.onscroll = function(){
  //
  // };
  //  Inner blog menu
    $(window).on('load', function() {
        if  ($('.main-wrapper').hasClass('blogInner_page') == true) {
            $('header').addClass('active');
            $('header.active').css('background', 'rgba(255, 255, 255, 0.8)');
            $('.bars.bars1').addClass('show').removeClass('hide');
            $('.menu').addClass('hide').removeClass('show');
            $('.menu nav ul li a').removeClass('wow fadeInDown');

            $(window).on('scroll', function() {
                $('header').addClass('active');
                $('header.active').css('background', 'rgba(255, 255, 255, 0.8)');
                $('.bars.bars1').addClass('show').removeClass('hide');
                $('.menu').addClass('hide').removeClass('show');
                $('.menu nav ul li a').removeClass('wow fadeInDown');
            });
        }
    });


// Меню
	var menu = 0;
	$('header .right div.bars').on("click", function(){
        if (menu == 0) {
			// $('#box-2, #box-3, footer').fadeOut();
            if ($(window).width()<768) {
                $('.box-1, .box-2, .box-3, .box-4, .box-5, footer').css('display', 'none');
            }
			$('body').css("overflow", "hidden");
			$('main nav.nav').fadeIn(300);
            $('header .right div.bars').addClass("act");
			// $('header .right div.bars').css('border', 'none');
			// $('header .right div.bars::before').css('border', 'none');
			// $('header .right div.bars').css('background', 'url(img/close.svg) no-repeat center');
			$('header .right div.bars').removeClass('bars1');
			$('#aboutMenu').css('display','none');
			$('#clientsMenu').css('display','none');
			$('#homeMenu').fadeIn(200);
			$('header').removeClass('active');
			$('header').css('background', 'rgba(0, 0, 0, 0.4)');
			$('header #logo').attr('src', 'img/evestudio_logo_r_whire.svg');
			$(".b24-widget-button-position-bottom-middle.b24-widget-button-wrapper").hide();
			menu = 1;
		} else if (menu == 1) {
			$('main nav.nav').fadeOut(300);
            if ($(window).width()<768) {
                $('.box-1, .box-2, .box-3, .box-4, .box-5, footer').css('display', 'block');
            }
            $('body').css("overflow", "auto");
			// $('#box-2, #box-3, footer').fadeIn();
            $('header .right div.bars').removeClass("act");
            $('header').css('background', 'rgb(255, 255, 255)');
            $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
            // $('header .right div.bars').css({'border-top': '2px solid white', 'border-bottom': '2px solid white'});
			// $('header .right div.bars').css('background', 'none');
			$('header .right div.bars').addClass('bars1');
            $(".b24-widget-button-position-bottom-middle.b24-widget-button-wrapper").fadeIn(1000);

			menu = 0;

		}

	});
    $('.nav .container a').on('click', function() {
        if (menu == 1) {
            if ($(window).width() < 768) {
                $('.box-1, .box-2, .box-3, .box-4, .box5').css('display', 'block');
            }
            $('main nav.nav').fadeOut(300);
            $('body').css("overflow", "auto");
            $('header').css('background', 'rgb(255, 255, 255)');
            $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
            $('header .right div.bars').removeClass('act');
            $('header .right div.bars').addClass('bars1');
            $(".b24-widget-button-position-bottom-middle.b24-widget-button-wrapper").fadeIn(1000);
            menu = 0;
        }
    });


//плавный скролл
    $("a[href^='#box']").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
//Кнопка "Наверх"
    $("#top, .sub_line .top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

// Фильтр кубиков
    (function filterCase() {
        $('#caseFilter li, #blogFilter li').on('click', function (e) {
            e.preventDefault();
            var filter_value = $(this).data('value');
            var allCases = $('#allCases .item, #allBlog .item-flex');
            var filter_text = $(this).find('a').text();
            var topText = $('#head_filter');
            $(topText).find('p').fadeOut(0);
            $(topText).find('h2').text(filter_text);
            $(allCases).fadeOut(0);
            for (var i=0; i<allCases.length; i++) {
                var one_case = allCases[i];
                // var one_case_data = $(one_case).data();
                if (filter_value == $(one_case).data(filter_value)) {
                    $(one_case).fadeIn(500);
                }
           }

        });
    })();

// OWL
    $(".owl-carousel-case").owlCarousel({
		dots: true,
		mouseDrag : false,
        // touchDrag : false,
		startPosition : 0,
		singleItem:true,
		loop:true,
		items : 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout : 3000
	});
//OWL-uslugi
    $(".owl-carousel-uslugi").owlCarousel({
        dots: false,
		nav: false,
        mouseDrag : false,
        // touchDrag : false,
        startPosition : 2,
        smartSpeed: 1000,
        singleItem:true,
        loop:true,
        autoplay: true,
        autoplayTimeout : 7000,
        items : 1
    });
//OWL Buts
    // Go to the next item
    $('.box-3 .paggs_buts .next').click(function(e) {
        e.preventDefault();
        $(".owl-carousel-uslugi").trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.box-3 .paggs_buts .prev').click(function(e) {
        e.preventDefault();
        $(".owl-carousel-uslugi").trigger('prev.owl.carousel');
    });
// OWL-about
    if ($(window).width()>1023) {
        $(".owl-carousel-about").owlCarousel({
            dots: false,
            nav: false,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            singleItem:false,
            loop:true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout : 5000,

            items : 4
        });
        $(".owl-carousel-usl").owlCarousel({
            dots: false,
            nav: false,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            singleItem:false,
            loop:false,
            autoplay: false,
            items : 4
        });
        $(".owl-carousel-clients").owlCarousel({
            dots: false,
            nav: false,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            singleItem:false,
            loop:false,
            autoplay: false,
            items : 4
        });
//OWL Buts
        $('.projects .box-3 .paggs_buts .next').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('next.owl.carousel');
        });
        $('.projects .box-3 .paggs_buts .prev').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('prev.owl.carousel');
        });

            // Go to the next item
            $('.box-2 .paggs_buts .next').click(function(e) {
                e.preventDefault();
                $('.owl-carousel-about').trigger('next.owl.carousel');
            });
        //OWL Buts
        // Go to the next item

// Go to the previous item
            $('.box-2 .paggs_buts .prev').click(function(e) {
                e.preventDefault();
                $('.owl-carousel-about').trigger('prev.owl.carousel');
            });
    } else if (($(window).width()>723) && ($(window).width()<1024)) {
        $(".owl-carousel-about").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 5000,

            items : 2
        });
        $(".owl-carousel-usl").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 7000,
            items : 2
        });
        $(".owl-carousel-clients").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 4500,
            items : 2
        });
        //OWL Buts
        $('.projects .box-3 .paggs_buts .next').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('next.owl.carousel');
        });
        $('.projects .box-3 .paggs_buts .prev').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('prev.owl.carousel');
        });
        // Go to the next item
        $('.box-2 .paggs_buts .next').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-about, .owl-carousel-usl').trigger('next.owl.carousel');
        });
// Go to the previous item
        $('.box-2 .paggs_buts .prev').click(function(e) {
            e.preventDefault();
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            $('.owl-carousel-about, .owl-carousel-usl').trigger('prev.owl.carousel');
        });
    } else if ($(window).width()<724) {
        $(".owl-carousel-about").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 5000,
            items : 1
        });
        $(".owl-carousel-usl").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 7000,
            items : 1
        });
        $(".owl-carousel-clients").owlCarousel({
            dots: false,
            nav: false,
            slideSpeed : 300,
            mouseDrag : false,
            // touchDrag : false,
            startPosition : 2,
            paginationSpeed : 400,
            singleItem:false,
            loop:true,
            autoplay: true,
            autoplayTimeout : 4500,
            items : 1
        });
        //OWL Buts
        $('.projects .box-3 .paggs_buts .next').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('next.owl.carousel');
        });
        $('.projects .box-3 .paggs_buts .prev').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-clients').trigger('prev.owl.carousel');
        });
        // Go to the next item
        $('.box-2 .paggs_buts .next').click(function(e) {
            e.preventDefault();
            $('.owl-carousel-about, .owl-carousel-usl').trigger('next.owl.carousel');
        });
// Go to the previous item
        $('.box-2 .paggs_buts .prev').click(function(e) {
            e.preventDefault();
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            $('.owl-carousel-about, .owl-carousel-usl').trigger('prev.owl.carousel');
        });
    }

// OWL
    var owl = $(".owl-carousel-main");
    owl.owlCarousel({
        dots: true,
        mouseDrag : false,
        // touchDrag : false,
        startPosition : 0,
        singleItem:true,
        loop:true,
        items : 1,
        autoplay: true,
        autoplayTimeout : 3000,
        smartSpeed: 1000
    });
//Map's on click
    $('#box-5 .google_map').on('click', function () {
        $(this).find("iframe").css("pointer-events", "auto");
    });
// black/color IMG
	$('.lid a img').hover(function() {
	 // var source =	$(this).attr('src');
		// $(this).attr('src', source.slice(0, -10)+'.svg');
		// var hi = $(this).attr('src');
	},
	function() {
		// var source =	$(this).attr('src');
		// $(this).attr('src', source.slice(0, -4)+'_black.svg');
		// var hu = $(this).attr('src');
	});
// case bottom img height
    function someHeight() {
        $('.case .gallery_full .gall.item_left').height($('.case .gallery_full .gall.item_left > img').height());
    };
    $(window).on('load', someHeight);
    $(window).on('resize', someHeight);
	//Wow js
    var wow = new WOW({
        offset: 150
    });
    wow.init();


    //MEDIA things
    if (($(window).width()>1023) && ($('.main-wrapper').hasClass('blogInner_page') == false)) {
        $(window).on('scroll', function () {
            setTimeout(header, 800);
        });
    // } else if ($(window).width()<1023) {
    //     $(window).on('scroll', header);
    } else {
        $('header').addClass('active');
        $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
        $('header.active').css('background', 'rgba(255, 255, 255, 1)');
        $('.bars.bars1').addClass('show').removeClass('hide');
        $('.menu').addClass('hide').removeClass('show');
        $('.menu nav ul li a').removeClass('wow fadeInDown');
    }

});
