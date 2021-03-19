$('.contact-us').click(function(){
	$('.modal').fadeIn();
	$('.modal').addClass('active');
})

$('.exit').click(function(){
	$('.modal').fadeOut();
	$('.modal').removeClass('active');
})