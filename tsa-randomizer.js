$(".randomizeButton").click(function() {
	$(".arrows > *").addClass("invisible").removeClass("leftArrowAnimate rightArrowAnimate")
	if (Math.random() >= 0.5) {
		$(".leftArrow").clone().removeClass("invisible").insertAfter(".leftArrow");
		$(".leftArrow:first").remove();
	} else {
		$(".rightArrow").clone().removeClass("invisible").insertAfter(".rightArrow");
		$(".rightArrow:first").remove();
	}
})
