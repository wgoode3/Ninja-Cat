// alternates images upon click

$(document).ready(function(){
	$('img').click(function(){
		var src = $(this).attr('src');
		var alt_src = $(this).attr('data-alt-src');
		$(this)[0].setAttribute("src", alt_src);
		$(this)[0].setAttribute("data-alt-src", src);
	})
})