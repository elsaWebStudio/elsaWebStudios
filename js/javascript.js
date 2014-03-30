//handles the hidden menu for mobile
$(".menuNav").click(function(){

	var htmlClass = $("nav").attr('class');

	if (htmlClass != "openNav")
	  	{
			$("nav").addClass("openNav");
		}
	else
		{
			$("nav").removeClass("openNav");
		}  
});

$(".navLink").click(function(){
	$("nav").removeClass("openNav");
});

//scrolling effect for links pointing to sections on loaded page
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top +10
				}, 500);
				return false;
			}
		}
	});
});