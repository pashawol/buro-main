$(function () {
	$(".top-catalog-button").click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(".catalog-menu").slideToggle();
	})
	$(".has-child > a").click(function(){
		$(this).toggleClass('active').next().slideToggle();
	})
});