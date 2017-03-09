$( document ).ready(function() {
    $(".home-summary a, .carousel-caption a").click(function() {
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

    //Slide Through Random Images
    if ($('.default-header').length) {

        var i = 2;
        var int = setInterval(changeBG, 4000);
        var slide1 = $(".default-header .slide-img");
        var slide2 = $(".default-header .slide-img-2");

        function changeBG() {
            if (slide1.hasClass('header-hidden')) {
                slide1.css('background-image', 'url("img/slideshow/' + ("0" + i).slice(-2) + '.jpg")');
                slide1.removeClass('header-hidden');
                window.setTimeout(function(){slide2.addClass('header-hidden');}, 300);
            } else if (slide2.hasClass('header-hidden')) {
                slide2.css('background-image', 'url("img/slideshow/' + ("0" + i).slice(-2) + '.jpg")');
                slide2.removeClass('header-hidden');
                window.setTimeout(function(){slide1.addClass('header-hidden');}, 300);
            }


            if(i == 13){
                i= 1;
            }
            else{
                i++;
            }
        }

    }

    //Magnific Popups
    if ($('#clearwater').length) {
        $('#boston').magnificPopup({
            items: [
                {
                    src: 'img/homes/Boston/Boston-lg.jpg',
                    title: 'Boston'
                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('#byrd').magnificPopup({
            items: [
                {
                    src: 'img/homes/Byrd/Byrd-lg.jpg',
                    title: 'Byrd'
                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('#chriswood').magnificPopup({
            items: [
                {
                    src: 'img/homes/Chriswood/Chriswood-lg.jpg',
                    title: 'Chriswood'
                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('#clearwater').magnificPopup({
            items: [
                {
                    src: 'img/homes/Clearwater/Clearwater-lg.jpg',
                    title: 'Clearwater'
                },
                {
                    src: 'img/homes/Clearwater/Clearwater-Back-lg.jpg',
                    title: 'Clearwater Backyard'
                },
                {
                    src: 'img/homes/Clearwater/Clearwater-Kitchen-lg.jpg',
                    title: 'Clearwater Kitchen'
                },
                {
                    src: 'img/homes/Clearwater/Clearwater-Living-lg.jpg',
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
                    src: 'img/homes/Continental/Continental-lg.jpg',
                    title: 'Continental'
                },
                {
                    src: 'img/homes/Continental/Continental2-lg.jpg',
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
                    src: 'img/homes/EastLake/EastLake-lg.jpg',
                    title: 'EastLake'
                },
                {
                    src: 'img/homes/EastLake/EastLake2-lg.jpg',
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
                    src: 'img/homes/EastOver/EastOver-lg.jpg',
                    title: 'EastOver'
                },
                {
                    src: 'img/homes/EastOver/EastOver2-lg.jpg',
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
                    src: 'img/homes/Founders/Founders-lg.jpg',
                    title: 'Founders'
                },
                {
                    src: 'img/homes/Founders/Founders2-lg.jpg',
                    title: 'Founders'
                },
                {
                    src: 'img/homes/Founders/Founders-Back-lg.jpg',
                    title: 'Founders Backyard'
                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
        $('#hackberry').magnificPopup({
            items: [
                {
                    src: 'img/homes/Hackberry/Hackberry-lg.jpg',
                    title: 'Hackberry'
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
                    src: 'img/homes/Hollis/Hollis-lg.jpg',
                    title: 'Hollis'
                },
                {
                    src: 'img/homes/Hollis/Hollis-Kitchen-lg.jpg',
                    title: 'Hollis Kitchen'
                },
                {
                    src: 'img/homes/Hollis/Hollis-Living-lg.jpg',
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
                    src: 'img/homes/Lakeview/Lakeview-lg.jpg',
                    title: 'Lakeview'
                },
                {
                    src: 'img/homes/Lakeview/Lakeview-Back-lg.jpg',
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
                    src: 'img/homes/Legends/Legends-lg.jpg',
                    title: 'Legends'
                },
                {
                    src: 'img/homes/Legends/Legends-Back-lg.jpg',
                    title: 'Legends Backyard'
                },
                {
                    src: 'img/homes/Legends/Legends-Kitchen-lg.jpg',
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
                    src: 'img/homes/Stepping-Stones/Stepping-Stones-lg.jpg',
                    title: 'Stepping Stones'
                },
                {
                    src: 'img/homes/Stepping-Stones/Stepping-Stones-Bathroom-lg.jpg',
                    title: 'Stepping Stones Bathroom'
                },
                {
                    src: 'img/homes/Stepping-Stones/Stepping-Stones-Kitchen-lg.jpg',
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
                    src: 'img/homes/Valley-Forge/Valley-Forge-lg.jpg',
                    title: 'Valley Forge'
                },
                {
                    src: 'img/homes/Valley-Forge/Valley-Forge-Living-lg.jpg',
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
                    src: 'img/homes/Walnut-Creek/Walnut-Creek-lg.jpg',
                    title: 'Walnut Creek'
                },
                {
                    src: 'img/homes/Walnut-Creek/Walnut-Creek-Back-lg.jpg',
                    title: 'Walnut Creek Backyard'
                }
            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    }
    if ($('#culpepper-creek').length) {
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
    }
    
});