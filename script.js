$.fx.speeds.slow = 1500; //slow is 1.5 seconds

$(document).ready(function() {
	$('.tab').hover(function() {
//		$(this).toggleClass("lowlight");
	});
	
	$('.tab').click(function() {
		$('.tab').removeClass("highlight")
		$(this).addClass("highlight")
	});
});