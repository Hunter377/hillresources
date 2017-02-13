$( document ).ready(function() {
    $(".home-summary a").click(function() {
    var $href = $(this).attr("href");
    var $anchor = $($href).offset();
    $("html, body").animate({ scrollTop: $anchor.top }, 500);
	    return false;
	});

	$(".employees-button").on("click", function() {
		$(".employees-expand").toggleClass("open");
		$('.employees-button').html($('.employees-button').text() == 'View More' ? 'View Less' : 'View More');
	});

	// FAQ Menu
	$(".faq-text").on('click', function() {
		$(this).children('i').toggleClass('open-faq');
		$(this).siblings('.faq-description').toggle();
	});

	// Homes Image Slider
	$('#homeImageCarousel').carousel({
        interval: 5000
    });
 
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#homeImageCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#homeImageCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-'+id).html());
    });

    // Scroll To Top Button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            //$('.scroll-top-button').removeClass('bounce-out');
            $('.scroll-top-button').show();
            $('.scroll-top-button').addClass('bounce-in');
        } else {
            //$('.scroll-top-button').addClass('bounce-out');
            $('.scroll-top-button').removeClass('bounce-in');
        }
    });
    
    //Click event to scroll to top
    $('.scroll-top-button').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});