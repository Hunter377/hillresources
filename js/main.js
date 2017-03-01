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

    //Magnific Popups
    $('#clearwater').magnificPopup({
        items: [
            {
                src: 'img/homes/Clearwater.jpg',
                title: 'Clearwater'
            },
            {
                src: 'img/homes/Clearwater-Back.jpg',
                title: 'Clearwater Backyard'
            },
            {
                src: 'img/homes/Clearwater-Kitchen.jpg',
                title: 'Clearwater Kitchen'
            },
            {
                src: 'img/homes/Clearwater-Living.jpg',
                title: 'Clearwater Living Room'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#continental').magnificPopup({
        items: [
            {
                src: 'img/homes/Continental.jpg',
                title: 'Continental'
            },
            {
                src: 'img/homes/Continental2.jpg',
                title: 'Continental'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#eastlake').magnificPopup({
        items: [
            {
                src: 'img/homes/EastLake.jpg',
                title: 'EastLake'
            },
            {
                src: 'img/homes/EastLake2.jpg',
                title: 'EastLake'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#eastover').magnificPopup({
        items: [
            {
                src: 'img/homes/EastOver.jpg',
                title: 'EastOver'
            },
            {
                src: 'img/homes/EastOver2.jpg',
                title: 'EastOver'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#founders').magnificPopup({
        items: [
            {
                src: 'img/homes/Founders.jpg',
                title: 'Founders'
            },
            {
                src: 'img/homes/Founders2.jpg',
                title: 'Founders'
            },
            {
                src: 'img/homes/Founders-Back.jpg',
                title: 'Founders Backyard'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#hollis').magnificPopup({
        items: [
            {
                src: 'img/homes/Hollis.jpg',
                title: 'Hollis'
            },
            {
                src: 'img/homes/Hollis-Kitchen.jpg',
                title: 'Hollis Kitchen'
            },
            {
                src: 'img/homes/Hollis-Living.jpg',
                title: 'Hollis Living Room'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#lakeview').magnificPopup({
        items: [
            {
                src: 'img/homes/Lakeview.jpg',
                title: 'Lakeview'
            },
            {
                src: 'img/homes/Lakeview-Back.jpg',
                title: 'Lakeview Backyard'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#legends').magnificPopup({
        items: [
            {
                src: 'img/homes/Legends.jpg',
                title: 'Legends'
            },
            {
                src: 'img/homes/Legends-Back.jpg',
                title: 'Legends Backyard'
            },
            {
                src: 'img/homes/Legends-Kitchen.jpg',
                title: 'Legends Kitchen'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#stepping-stones').magnificPopup({
        items: [
            {
                src: 'img/homes/Stepping-Stones.jpg',
                title: 'Stepping Stones'
            },
            {
                src: 'img/homes/Stepping-Stones-Bathroom.jpg',
                title: 'Stepping Stones Bathroom'
            },
            {
                src: 'img/homes/Stepping-Stones-Kitchen.jpg',
                title: 'Stepping Stones Kitchen'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#valley-forge').magnificPopup({
        items: [
            {
                src: 'img/homes/Valley-Forge.jpg',
                title: 'Valley Forge'
            },
            {
                src: 'img/homes/Valley-Forge-Living.jpg',
                title: 'Valley Forge Living Room'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#walnut-creek').magnificPopup({
        items: [
            {
                src: 'img/homes/Walnut-Creek.jpg',
                title: 'Walnut Creek'
            },
            {
                src: 'img/homes/Walnut-Creek-Back.jpg',
                title: 'Walnut Creek Backyard'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('#culpepper-creek').magnificPopup({
        items: [
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm2.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm3.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm4.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm7.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm8.jpg',
                title: 'Culpepper Creek Farm'
            },
            {
                src: 'img/CulpepperCreek/Culpepper-Creek-Farm9.jpg',
                title: 'Culpepper Creek Farm'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    
});