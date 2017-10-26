'use strict';

(function(){
$(function(){






	//WOW
	new WOW({
		offset: 30
	}).init();

	$(".p-animated p").map(function(i, el){
		$(el).attr({
					"data-aos": "fade-up",
					"data-aos-duration": 600,
					"data-aos-delay": 100*i});
		$(el).addClass("invisible");
		setTimeout(function(){$(el).removeClass("invisible")}, 600);
		setTimeout(function(){$(el).removeClass("aos-animate")}, 100);
	})
	// AOS
	AOS.init({
	  offset: 0,
	  once: true,
	  duration: 1000,
	  delay: 100
	});
	setTimeout(function(){AOS.refresh()}, 300);


var i = {
	// GOOGLE MAP INIT
	gm_content: '<h2>DAEWOO ALTOEN</h2>'+
					'<p>Адрес: МО., г. Долгопрудный, Промышленный проезд 14, офис 314</p>'+
					'<p>Телефон: +7(495)922-3765</p>'+
					'<p>E-mail: info@altoendaewoo.ru</p>',
	gm_title : 'Мы',
	gm_icon: 					"img/icons/marker.png",

	gm_marker_position_lat:  41.296781,
	gm_marker_position_lng:  69.226306,

	gm_position_lat: 			 41.2968543,
	gm_position_lng: 			 69.2080361
};




var header_status = false;


window.$.fn.initMenu = function(option){

	var options = $.extend({
		"menuToggleBtn"					: false, 		// Кнопка бара
		"subMenu"								: false, 		// Класс подменю
		"modalMenu"							: false, 		// Модальное меню

		"menuToggle"						: Function, 	// Переключение
		"menuHoverIn"						: Function,
		"menuHoverOut"					: Function,
		"subHoverIn"						: Function,
		"subHoverOut"						: Function,
		"modalMenuShow"					: Function, 	// Открытие меню
		"modalMenuShown"				: Function,		// Меню раскрыт
		"modalMenuHide"					: Function, 	// Раскрытие Меню
		"modalMenuHidden"				: Function 		// Меню скрыт


	}, option );
	var menu = new Menu(this, options);

	return menu;

}



function phoneDap(){
	if ( checkView(992) )
		return;
	$(".copyright")
		.before( $(".social") )
}
phoneDap();

//RESIZE
$( window ).on("resize", function(e){

	// body

});
//SCROLL
$( window ).on("scroll", function(){
	if($(window).scrollTop() > 500 && header_status == false){
		

		$("#header").addClass("navbar-scroll");
		
		header_status = true; 

	}else if($(window).scrollTop() < 500 && header_status == true){

		$("#header").removeClass("navbar-scroll");
		
		header_status = false;

	}

});



function Menu( menu, options ){

	var self = this;
	menu = $( menu );

	//ПОЛЯ
	this.menuClass						= menu[0].className;
	this.menuToggleBtn 				= $( $(options.menuToggleBtn) ) ;
	this.menuToggleBtnParent  = $(this.menuToggleBtn).parent();
	this.subMenu 							= $( menu.find(options.subMenu) );
	this.modalMenu  					= $( $(options.modalMenu) );
	this.modalMenuStatus 		 	= false; 

	//МЕТОДЫ
	this.menuToggle					= function(){
		$( this.menuToggleBtn ).trigger("click");
		return this.modalMenuStatus = !this.modalMenuStatus;
	}


	menu.find("[class|='sub']").closest("li").addClass("sub-parent");
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
 $.fn.fadeToggleBool = function( dura = 290 ){
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


	});//$
}) (jQuery);



function checkView( width ){
	return ($( document ).width() > width);
}

