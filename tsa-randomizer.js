$(".rightArrow").animate({
	opacity: 0
}, 0)
$(".leftArrow").animate({
	opacity: 0
}, 0)

var isAnimating

$(".randomizeButton").click(function() {
	if (!isAnimating) {
		isAnimating = true;
		$(".rightArrow").animate({
			opacity: 0
		}, 1000)
		$(".leftArrow").animate({
			opacity: 0
		}, 1000)

		// reveal either the left or the right arrow
		randomNumber = Math.random()
		if (randomNumber > 0.5) {
			$(".rightArrow").animate({
				opacity: 1
			}, 1000, function() {
				isAnimating = false
			})
		} else {
			$(".leftArrow").animate({
				opacity: 1
			}, 1000, function() {
				isAnimating = false
			})
		}
	}
})
