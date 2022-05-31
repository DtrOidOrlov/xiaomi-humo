
$(function () {
    
    // Slick Slider
    $('.bike__slider, .slider__items').slick({
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // Smooth scroll
    $('.menu, .bike__column').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        
        console.log(top)
        
        $('body, html').animate({ scrollTop: top - 20 }, 2000);
    });


    // Up Arrow
    var $up__arrow = $('.up__arrow');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 70) {
            $up__arrow.fadeIn();
        } else {
            $up__arrow.fadeOut();
        }
    });
    // Click
    $up__arrow.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 900)
    });

    // --------------------------------------------------------
    // Form
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
   
});