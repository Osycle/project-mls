'use strict';

(function(){
$(function(){


	loadedInit();


	//WOW
	new WOW({
		offset: 210
	}).init();


	// AOS
	AOS.init({
	  offset: 100,
	  //once: true,
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
$( window ).on("resize", function(e){

	// body

});
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


/*if(window.navigator.platform.indexOf('Mac') < 0){
(function(){var D={
	frameRate:150,
	animationTime:500,
	stepSize:120,
	pulseAlgorithm:true,
	pulseScale:6,
	pulseNormalize:1,
	accelerationDelta:20,
	accelerationMax:1,
	keyboardSupport:true,
	arrowScroll:50,
	touchpadSupport:true,
	fixedBackground:true,excluded:""};var u=D;var s=false;var p=false;var h={x:0,y:0};var b=false;var w=document.documentElement;var d;var y;var G=[120,120,120];var o={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var u=D;function J(){var K=false;if(K){a("keydown",t)}if(u.keyboardSupport&&!K){f("keydown",t)}}function E(){if(!document.body){return}var K=document.body;var L=document.documentElement;var O=window.innerHeight;var M=K.scrollHeight;w=(document.compatMode.indexOf("CSS")>=0)?L:K;d=K;J();b=true;if(top!=self){p=true}else{if(M>O&&(K.offsetHeight<=O||L.offsetHeight<=O)){L.style.height="auto";if(w.offsetHeight<=O){var N=document.createElement("div");N.style.clear="both";K.appendChild(N)}}}if(!u.fixedBackground&&!s){K.style.backgroundAttachment="scroll";L.style.backgroundAttachment="scroll"}}var z=[];var g=false;var m=+new Date;function F(N,M,R,O){O||(O=1000);x(M,R);if(u.accelerationMax!=1){var K=+new Date;var S=K-m;if(S<u.accelerationDelta){var P=(1+(30/S))/2;if(P>1){P=Math.min(P,u.accelerationMax);M*=P;R*=P}}m=+new Date}z.push({x:M,y:R,lastX:(M<0)?0.99:-0.99,lastY:(R<0)?0.99:-0.99,start:+new Date});if(g){return}var Q=(N===document.body);var L=function(U){var T=+new Date;var ab=0;var aa=0;for(var W=0;W<z.length;W++){var ad=z[W];var ac=T-ad.start;var V=(ac>=u.animationTime);var X=(V)?1:ac/u.animationTime;if(u.pulseAlgorithm){X=j(X)}var Z=(ad.x*X-ad.lastX)>>0;var Y=(ad.y*X-ad.lastY)>>0;ab+=Z;aa+=Y;ad.lastX+=Z;ad.lastY+=Y;if(V){z.splice(W,1);W--}}if(Q){window.scrollBy(ab,aa)}else{if(ab){N.scrollLeft+=ab}if(aa){N.scrollTop+=aa}}if(!M&&!R){z=[]}if(z.length){A(L,N,(O/u.frameRate+1))}else{g=false}};A(L,N,0);g=true}function l(N){if(jQuery("body").hasClass("woocommerce-checkout")){return}if(jQuery(N.target).closest(".navbar-collapse").length===1){return}if(jQuery(N.target).closest(".chosen-results").length===1){return}if(jQuery(N.target).closest(".select2-results").length===1){return}if(jQuery(N.target).closest(".modal-open").length===1){return}if(jQuery(N.target).closest(".search-header-wrapper").length===1){return}if(!b){E()}var O=N.target;var M=B(O);if(!M||N.defaultPrevented||k(d,"embed")||(k(O,"embed")&&/\.pdf/i.test(O.src))){return true}var L=N.wheelDeltaX||0;var K=N.wheelDeltaY||0;if(!L&&!K){K=N.wheelDelta||0}if(!u.touchpadSupport&&I(K)){return true}if(Math.abs(L)>1.2){L*=u.stepSize/120}if(Math.abs(K)>1.2){K*=u.stepSize/120}F(M,-L,-K);N.preventDefault()}function t(L){var Q=L.target;var O=L.ctrlKey||L.altKey||L.metaKey||(L.shiftKey&&L.keyCode!==o.spacebar);if(/input|textarea|select|embed/i.test(Q.nodeName)||Q.isContentEditable||L.defaultPrevented||O){return true}if(k(Q,"button")&&L.keyCode===o.spacebar){return true}var M,S=0,R=0;var N=B(d);var P=N.clientHeight;if(N==document.body){P=window.innerHeight}switch(L.keyCode){case o.up:R=-u.arrowScroll;break;case o.down:R=u.arrowScroll;break;case o.spacebar:M=L.shiftKey?1:-1;R=-M*P*0.9;break;case o.pageup:R=-P*0.9;break;case o.pagedown:R=P*0.9;break;case o.home:R=-N.scrollTop;break;case o.end:var K=N.scrollHeight-N.scrollTop-P;R=(K>0)?K+10:0;break;case o.left:S=-u.arrowScroll;break;case o.right:S=u.arrowScroll;break;default:return true}F(N,S,R);L.preventDefault()}function n(K){d=K.target}var i={};setInterval(function(){i={}},10*1000);var v=(function(){var K=0;return function(L){return L.uniqueID||(L.uniqueID=K++)}})();function c(L,K){for(var M=L.length;M--;){i[v(L[M])]=K}return K}function B(N){var L=[];var K=w.scrollHeight;do{var M=i[v(N)];if(M){return c(L,M)}L.push(N);if(K===N.scrollHeight){if(!p||w.clientHeight+10<K){return c(L,document.body)}}else{if(N.clientHeight+10<N.scrollHeight){overflow=getComputedStyle(N,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto"){return c(L,N)}}}}while(N=N.parentNode)}function f(M,L,K){window.addEventListener(M,L,(K||false))}function a(M,L,K){window.removeEventListener(M,L,(K||false))}function k(L,K){return(L.nodeName||"").toLowerCase()===K.toLowerCase()}function x(K,L){K=(K>0)?1:-1;L=(L>0)?1:-1;if(h.x!==K||h.y!==L){h.x=K;h.y=L;z=[];m=0}}var e;function I(K){if(!K){return}K=Math.abs(K);G.push(K);G.shift();clearTimeout(e);var M=(G[0]==G[1]&&G[1]==G[2]);var L=(q(G[0],120)&&q(G[1],120)&&q(G[2],120));return !(M||L)}function q(L,K){return(Math.floor(L/K)==L/K)}var A=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(M,L,K){window.setTimeout(M,K||(1000/60))}})();function C(K){var M,N,L;K=K*u.pulseScale;if(K<1){M=K-(1-Math.exp(-K))}else{N=Math.exp(-1);K-=1;L=1-Math.exp(-K);M=N+(L*(1-N))}return M*u.pulseNormalize}function j(K){if(K>=1){return 1}if(K<=0){return 0}if(u.pulseNormalize==1){u.pulseNormalize/=C(1)}return C(K)}var H=/chrome/i.test(window.navigator.userAgent);var r="onmousewheel" in document;if(r&&H){f("mousedown",n);f("mousewheel",l);f("load",E)}})();
}*/
var overflow; 

	});//$
}) (jQuery);


var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);


function loadedInit(){

	//SCROLLR
	$("[data-scroll-animated]").map(function(i, el){
		var el = $(el) ;
		var scrollOffset = [];
	 	$( el.attr("data-scroll-animated").split(',') )
	 		.map(function(i, el){
				scrollOffset.push( el.trim() );
			})

		i % 2 == 1 ? 
		el.attr("data-"+scrollOffset[0], "transform: translate3d(-30%, 0%, 0px);")
			.attr("data-"+scrollOffset[1], "transform: translate3d( 0%, 0%, 0px);")
		:
		el.attr("data-"+scrollOffset[0], "transform: translate3d(30%, 0%, 0px);")
			.attr("data-"+scrollOffset[1], "transform: translate3d( 0%, 0%, 0px);")
	})
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







function checkView( width ){
	return ($( document ).width() > width);
}

