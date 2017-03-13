$(document).ready(function() {


// Цвет полоски меню
	var box1 = $('.box-1').height();
	var box2 = $('.box-2>div').height()
	var box3 = $('.box-3').height();
	var pos1 = box1;
	var pos2 = pos1 + box2;
	var pos3 = pos2 + box3;
	var finalPos1 = pos1 + -'77';
	var finalPos2 = pos2 + -'15';
	var finalPos3 = pos3;

	window.onscroll = function(){

	   var html = document.documentElement, body = document.body;
		 if (body.scrollTop<finalPos1){
			 // $('#homeMenu').css('display','inline-block');
			 // $('#aboutMenu').css('display','none');
			 // $('#clientsMenu').css('display','none');
			 $('header').removeClass('active');
			 $('header').css('background', 'rgba(0, 0, 0, 0.5)');
			 $('header #logo').attr('src', 'img/evestudio_logo_r_whire.svg');
			 $('.bars.bars1').addClass('hide').removeClass('show');
             $('.menu').addClass('show').removeClass('hide');
             $('.menu nav ul li a').css({'visibility':'visible', 'animation-name':'fadeInDown'});

         } else if (body.scrollTop>finalPos1 && body.scrollTop<pos1) {
			 $('header').addClass('active');
			 $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
			 $('header.active').css('background', 'rgba(255, 255, 255, 1)');
             $('.bars.bars1').addClass('show').removeClass('hide');
			 $('.menu').addClass('hide').removeClass('show');

         }else if(body.scrollTop>finalPos1 && body.scrollTop<finalPos2) {
			 // $('#homeMenu').css('display','none');
			 // $('#aboutMenu').css('display','inline-block');
			 // $('#clientsMenu').css('display','none');
			 $('header').addClass('active');
			 $('header.active').css('background', 'rgba(255, 255, 255, 0.7)');
			 $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
             $('.bars.bars1').addClass('show').removeClass('hide');
             $('.menu').addClass('hide').removeClass('show');
	   } else if (body.scrollTop>finalPos2) {
			 // $('#homeMenu').css('display','none');
			 // $('#aboutMenu').css('display','none');
			 // $('#clientsMenu').css('display','inline-block');
			 $('header').addClass('active');
			 $('header #logo').attr('src', 'img/evestudio_logo_r.svg');
             $('.bars.bars1').addClass('show').removeClass('hide');
             $('.menu').addClass('hide').removeClass('show');
		 }
		//  console.log(body.scrollTop);
  };

// Меню
	var menu = 0;
	$('header .right div.bars').click(function(){
		if (menu == 0) {
			// $('#box-2, #box-3, footer').fadeOut();
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
		} else {
			$('main nav.nav').fadeOut(300);
			$('body').css("overflow", "auto");
			// $('#box-2, #box-3, footer').fadeIn();
            $('header .right div.bars').removeClass("act");

            // $('header .right div.bars').css({'border-top': '2px solid white', 'border-bottom': '2px solid white'});
			// $('header .right div.bars').css('background', 'none');
			$('header .right div.bars').addClass('bars1');
            $(".b24-widget-button-position-bottom-middle.b24-widget-button-wrapper").fadeIn(1000);

			menu = 0;
		}
	});
	$('.nav .container a').click(function(){
		$('main nav.nav').fadeOut(300);
		$('body').css("overflow", "auto");
		$('header').addClass('active');
		$('header.active').css('background', 'rgba(255, 255, 255, 0.7)');
		// $('#box-2, #box-3').fadeIn();
		// $('#box-2, #box-3, footer').fadeIn();
		$('header .right div.bars').css({'border-top': '2px solid white', 'border-bottom': '2px solid white'});
		$('header .right div.bars').css('background', 'none');
		$('header .right div.bars').addClass('bars1');

		menu = 0;

	});

//Кнопка "Наверх"
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 1
		}, 800);
		return false;
	});
//плавный скролл
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

// OWL
    $(".owl-carousel-case").owlCarousel({
		dots: true,
		slideSpeed : 300,
		mouseDrag : true,
		startPosition : 1,
		paginationSpeed : 400,
		singleItem:true,
		loop:true,
		items : 1
	});

//OWL-uslugi
    $(".owl-carousel-uslugi").owlCarousel({
        dots: false,
		nav: false,
        slideSpeed : 300,
        mouseDrag : true,
        startPosition : 2,
        paginationSpeed : 400,
        singleItem:true,
        loop:true,
        items : 1
    });
//OWL Buts
    // Go to the next item
    $('.paggs_buts .next').click(function(e) {
        e.preventDefault();
        $(".owl-carousel-uslugi").trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.paggs_buts .prev').click(function(e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $(".owl-carousel-uslugi").trigger('prev.owl.carousel', [300]);
    });
// OWL-about
    $(".owl-carousel-about").owlCarousel({
        dots: false,
        nav: false,
        slideSpeed : 300,
        mouseDrag : true,
        startPosition : 2,
        paginationSpeed : 400,
        singleItem:false,
        loop:true,
        items : 4
    });
//OWL Buts
    // Go to the next item
    $('.paggs_buts .next').click(function(e) {
        e.preventDefault();
        $(".owl-carousel-about").trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.paggs_buts .prev').click(function(e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $(".owl-carousel-about").trigger('prev.owl.carousel', [300]);
    });


//Map's on click
    $('#box-5 .google_map').on('click', function () {
        $(this).find("iframe").css("pointer-events", "auto");
    });
// black/color IMG
	$('.lid a img').hover(function() {
	 var source =	$(this).attr('src');
		$(this).attr('src', source.slice(0, -10)+'.svg');
		var hi = $(this).attr('src');
	},
	function() {
		var source =	$(this).attr('src');
		$(this).attr('src', source.slice(0, -4)+'_black.svg');
		var hu = $(this).attr('src');
	});

	//Wow js
    var wow = new WOW();
    wow.init();

});
