$(document).ready(function(){

	setInterval(changeSlide, 5000);

	var carouselList = $('#carousel ul');
	carouselList.css({marginLeft: -600});

	function changeSlide() {
		carouselList.animate({marginLeft: -600}, 1000, moveLastSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	};

	$('.btn-left').click(function() {
		changeSlide();
	});

	$('.btn-right').click(function() {
		changeSlideRight();
	});

	function changeSlideRight() {
		carouselList.animate({marginRight: 600}, 1000, moveFirstSlide);
	};
	
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.before(firstItem);
		carouselList.css({marginLeft: -600});
	};

	/*var indicNo = $('#indic-3');
	console.log(indicNo.index());*/

});