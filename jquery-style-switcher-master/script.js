$("#change-red").on("click", function(){
	$(".changing-divs").css("background-color", "red");
})

$("#change-green").on("click", function(){
	$(".changing-divs").css("background-color", "green");
})

$("#change-blue").on("click", function(){
	$(".changing-divs").css("background-color", "blue");
})

$("#make-big").on("click", function(){
	$(".changing-divs").addClass("bigger")
	$(".changing-divs").css("background-color", "red");
})

$("#make-small").on("click", function(){
	$(".changing-divs").addClass("smaller")
	$(".changing-divs").css("background-color", "green");
})

$("#animate-div").on("click", function(){
	$(".changing-divs").addClass("animation");
})