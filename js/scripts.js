$(function() {

	var carouselList = $("#carousel ul");
			leftarrow = $("#left");
			rightarrow = $("#right");

	

		leftarrow.on("click", function() {
			carouselList.animate({'marginLeft': -600}, 1100, function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});
			});
		});

		rightarrow.on("click", function() {
			carouselList.animate({'marginRight': 1200}, 1100, function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft: 0});
			});
		});



		carouselList.each(function(){
			setInterval(function(){
				carouselList.animate({'marginLeft': -600}, 1100, function(){

					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft:0});

				});
			}, 5000);
		});
});
