'use strict';

(function(){
$(function(){


	loadedInit();

	// FANCYBOX
	if( $("[data-fancybox]").length != 0 )
		$("[data-fancybox]").fancybox({
			afterShow : function( instance, current ) {

			},
			animationEffect : "fade"
			//transitionEffect: "zoom-in-out"
		});

	//WOW
	new WOW({
		offset: 210
	}).init();


	// AOS
	AOS.init({
	  offset: 100,
	  once: true,
	  duration: 1000,
	  delay: 50
	});
	setTimeout(function(){AOS.refresh()}, 300);

	// SKROLLR
	if( !isMobile ){
		skrollr.init({
			smoothScrolling: false,
			forceHeight: false,
			mobileDeceleration: 0.004
		});
		if(".bg-line")
			$(".bg-line").addClass("show")
	}
						 
						

	//menu init
	$(".nav-menu").initMenu({
		"menuToggleBtn": ".menu-toggle",
		"subMenu": ".sub-menu-1",
		"modalMenu": "#menuModal",
		menuHoverIn: function(){}
	});


function phoneDap(){
	if ( checkView(992) )
		return;
	$(".copyright")
		.before( $(".social") )
}

function dropbtn(){
	$(".dropdown-lang .dropbtn").on("click", function(){
		$( $(this)
			.siblings(".dropdown-content") )
			.toggleClass("active");
	});
	$(".dropdown-lang .dropdown-content").on("mouseleave", function(){
		$(this)
		.removeClass("active");
	});
}
dropbtn();



//RESIZE
$( window ).on("resize", function(e){});
//SCROLL
var header_status = false;
$( window ).on("scroll", function(e){
	if($(window).scrollTop() > 300 && header_status){
		//$(".header-scroll").addClass("in");
		header_status = true; 
	}else if($(window).scrollTop() < 300 && header_status){
		//$(".header-scroll").removeClass("in");
		header_status = false;
	}
});

if( $(".dop-toggle").length != 0 )
	$(".dop-toggle").click(function(){
		$(".dop-toggle").toggleClass("in");
		if( $(".product-details").length != 0 )
			$(this).siblings(".product-details").slideToggle();
	})



	if( $('.carousel-article').length >= 0 ){

		var carouselMain = 		$('.carousel-article .carousel-main'),
				carouselNav = 		$('.carousel-article .carousel-nav');

		for( var i = 0 ; i < carouselMain.length ; i++ ){

			var crs = $(carouselMain).eq(i).flickity({
				imagesLoaded: true,
				prevNextButtons: false,
				cellAlign: 'center',
				//friction: 1,
				//selectedAttraction: 1,
				initialIndex: 1,
				draggable: true,
				contain: true,
				pageDots: false
			});

			$(carouselNav).eq(i).flickity({
				imagesLoaded: true,
				initialIndex: 1,
			  asNavFor: $(carouselMain)[i],
			  prevNextButtons: true,
			  draggable: true,
			  cellAlign: 'center',
			  adaptiveHeight: true,
			  //contain: true,
			  pageDots: false
			});

		}
	}





	});//$
}) (jQuery);




var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);


function loadedInit(){

	//WOW
	$(".animation").map(function(i, el){
		$(el).addClass("fadeInUp")
	})

}


//COMMON FUNTIONS

function sendForm(th){

	this.onsubmit = function(e){ e.preventDefault();}
	var require = $(th).serialize();
	send(require+"&to="+to);

	$(th).find("input").val("");
}

function ajPost(u, d, s, c){
	$.ajax({
		type: 		"POST",
		url: 			u,
		data: 		d,
		success: 	s,
		statusCode: {
			404: function(){alert("Страница не найдена");}
		},
		complete: c
	});
}
 $.fn.fadeToggleBool = function( dura ){
 	var self = $( $(this) ),
 		 bool = self.css("display") == "none";

	self.fadeToggle({

		duration: dura,
		easing: "linear"

	});

	return bool;
 }

function modalShadow( el ){

	if( $(modal_shadow).length == 0 && el.jquery) 
		return;

	if( modal_shadow.fadeToggleBool() ){
		modal_shadow.on("click", function(){
			if(el.length != 0)
				el.trigger("click");
			});
	}else
		modal_shadow.off("click");
}

function scrolledDiv(el) {
	try{
	  var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elTop = $(el).offset().top,
		elBottom = elTop + $(el).height()/1.8;
	}catch(err){console.error();}

  	return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
}



function checkView( width ){
	return ($( document ).width() > width);
}





function Menu( menu, options ){

	var self = this;
	menu = $( menu );

	
	this.menuClass						= menu[0].className;
	this.menuToggleBtn 				= $( $(options.menuToggleBtn) ) ;
	this.menuToggleBtnParent  = $(this.menuToggleBtn).parent();
	this.subMenu 							= $( menu.find(options.subMenu) );
	this.modalMenu  					= $( $(options.modalMenu) );
	this.modalMenuStatus 		 	= false; 


	this.menuToggle					= function(){
		$( this.menuToggleBtn ).trigger("click");
		return this.modalMenuStatus = !this.modalMenuStatus;
	}


	menu.find("[class*='sub']").closest("li").addClass("sub-parent");
	$(".min-navbar").append( menu.clone() ).find( "."+this.menuClass ).addClass("min");

	this.modalMenu.on('show.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;

		options.modalMenuShow();

	})
	this.modalMenu.on('shown.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;

		options.modalMenuShown();
		
	})
	this.modalMenu.on('hide.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;
		options.modalMenuHidden();

	})
	this.modalMenu.on('hidden.bs.modal', function (e) {
		if (self.modalMenu.length === 0) return;
		self.menuToggleBtn.addClass("collapsed");
		options.modalMenuHidden();

	})

	//HOVER MENU
	menu.find("li").hover(
		function(){
			options.menuHoverIn();
	},function(){
			options.menuHoverOut();
	});



	//HOVER SUB-MENU
	this.subMenu.hover(
		function(){
			adposmenu(this);
			options.subHoverIn();
		},
		function(){
			options.subHoverOut();
		});




	this.menuToggleBtn.on("click", function(){
		if(this.modalMenuStatus)
			$(this).addClass("collapsed");
		else
			$(this).removeClass("collapsed");

		options.menuToggle();
	});
	

	//	FUNCITON

	function adposmenu(subMenu){
		//Адаптация положение подменю в зависимости от размера экрана
		var el = $(subMenu).find("li ul");
		if (el.length === 0) return;
		if ( $( window ).width() < el.width() + el.offset().left ) 
			el.addClass("left");
	}
}





window.$.fn.initMenu = function(option){

	var options = $.extend({
		"menuToggleBtn"					: false, 		
		"subMenu"								: false, 		
		"modalMenu"							: false, 		

		"menuToggle"						: Function, 	
		"menuHoverIn"						: Function,
		"menuHoverOut"					: Function,
		"subHoverIn"						: Function,
		"subHoverOut"						: Function,
		"modalMenuShow"					: Function,
		"modalMenuShown"				: Function,
		"modalMenuHide"					: Function,
		"modalMenuHidden"				: Function 


	}, option );
	var menu = new Menu(this, options);

	return menu;

}



