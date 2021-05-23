$(document).ready(function(){
	$('.skill').each(function(e){
		var skill_name = $(this).attr('data-skill-name')
		var skill_val = $(this).attr('data-value') + "%";
		$(this).find('.skill-name').html(skill_name)

		$(this).find('.progress-bar').css({
			'width' : skill_val
		});
		$(this).find('.skill-value').html((parseInt(skill_val)/10) + " / 10")
	})

	call_fullPage()
	myFunction();

}); //Jquery

// loader
	function myFunction() {
		setTimeout(showPage, 3000);
	}

	function showPage() {
		$('.overlay').hide();
	}

	function call_fullPage(){
		var win_width = $(window).width();
		if( win_width >= 768){
			$('#fullpage').fullpage({
				anchors: ['about_me', 'experience', 'skills', 'hire_me'],
				menu: '#menu',
				navigation: true,
				navigationPosition: 'right',
				verticalCentered: false,
				scrollOverflow: true,
				scrollOverflowReset: true
			});		
		}
	}