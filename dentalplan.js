function getRandomColour() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function getRandomSize() {
	return Math.random() * 100;
}

var interval;
$(document).ready(function() {
	var bDentalPlan = true;
	
	$('h1').click(function() {
		if ( !$(this).hasClass('playing') ) {
			var sText = bDentalPlan ? "LISA NEEDS BRACES" : "DENTAL PLAN";
			$(this).text(sText);

			var sAudioTarget = bDentalPlan ? "#lisa-needs-braces" : "#dental-plan";
			$(sAudioTarget).get(0).play();

			var sColour = getRandomColour();
			$('body').css('background', sColour);

			sColour = getRandomColour();
			$('h1').css('color', sColour);

			var iSize = getRandomSize();
			$('h1').css('font-size', iSize);

			$(this).addClass('playing');
		}
	});

	$('audio').bind('ended', function() {
		$('h1').removeClass('playing');
		bDentalPlan = !bDentalPlan;
	});

	// Centering.
	$(window).resize(function() {
		var sHeight = $('html').outerHeight(true) + "px";
		$('h1').css('line-height', sHeight);
	}).trigger('resize');

	$('#iButton').iButton({
		change: function() {
			var bChecked = $('input[type=checkbox]').is(":checked");
			
			if ( bChecked ) {
				interval = setInterval(function() {
					$('h1').click();
				}, 100);
			}
			else {
				clearInterval(interval);
			}
		}
	});
});