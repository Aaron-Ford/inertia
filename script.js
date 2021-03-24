$('.contact-us').click(function(){
	$('.modal').fadeIn();
	$('.modal').addClass('active');
		console.log('click');
	$('iframe').attr("src", "https://player.vimeo.com/video/305363625?controls=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0&amp;color=afffda&amp;muted=0")
})

$('.exit').click(function(){
	$('.modal').fadeOut();
	$('.modal').removeClass('active');
})


  AOS.init();

$('.vimeo-wrapper').click(function(){
	console.log('click');
	$(this).attr("src", "https://player.vimeo.com/video/305363625?controls=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0&amp;color=afffda&amp;muted=0")
})