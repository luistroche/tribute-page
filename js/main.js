$(document).ready(function() {
	var navigationHeight = $('nav').outerHeight() + 15;
	$('.smooth-scrolling').click(function(anulandoDefault){

		var linkFromHref = $(this).attr('href');
		
		$('html, body').animate({
			scrollTop: $(linkFromHref).offset().top - navigationHeight

		}, 1500);
		
		anulandoDefault.preventDefault();
	});

});