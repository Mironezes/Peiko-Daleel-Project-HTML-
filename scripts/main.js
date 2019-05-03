$(function() {

    $('select').niceSelect();




    $('.owl-carousel.testimonials_tiles_block').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dotsContainer: '.testimonials_dots'
    });

    let owlTestimonials = $('.testimonials_tiles_block');
    owlTestimonials.owlCarousel();

    $('.testimonials_arrows .slider_arrows__next').click(function() {
        owlTestimonials.trigger('next.owl.carousel');
    })

    $('.testimonials_arrows .slider_arrows__prev').click(function() {
        owlTestimonials.trigger('prev.owl.carousel');
    })




    $('.owl-carousel.verified_suppliers_tiles_block').owlCarousel({
        center: true,
        items: 9,
        loop: true,
        margin: 20,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 3,
            },
            // breakpoint from 480 up
            480: {
                items: 4,
            },
            // breakpoint from 768 up
            768: {
                items: 6,
            },
            992: {
                items: 9
            }
        }
    });


    let owlSuppliers = $('.verified_suppliers_tiles_block');
    owlSuppliers.owlCarousel();

    $('.verified_suppliers_arrows .slider_arrows__next').click(function() {
        owlSuppliers.trigger('next.owl.carousel');
    })

    $('.verified_suppliers_arrows .slider_arrows__prev').click(function() {
        owlSuppliers.trigger('prev.owl.carousel');
    })




    $('.owl-carousel.verified_suppliers_category_tiles_block').owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        responsive: {
            // breakpoint from 0 up
            0: {
                center: true,
                items: 1,
            },
            // breakpoint from 480 up
           550: {
                margin: 0,              
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 3,
            },
            992: {
                items: 4
            }
        }
    });

    let owlSuppliersCategory = $('.verified_suppliers_category_tiles_block');
    owlSuppliersCategory.owlCarousel();

    $('.verified_suppliers_categories_next_arrow').click(function() {
        owlSuppliersCategory.trigger('next.owl.carousel');
    })

    $('.verified_suppliers_categories_prev_arrow').click(function() {
        owlSuppliersCategory.trigger('prev.owl.carousel');
    })





    function navScroll() {

        let y = window.scrollY;
        if (y > 80) {
            if ($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('mobile_transparent');
                $('.header_wrapper').addClass('white');
                $('.mobile_menu_icon').addClass('blue');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__dark.svg');
            }
        } else {
            if ($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');
                $('.mobile_menu_icon').removeClass('blue');
                $('.header_wrapper').addClass('mobile_transparent');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__white.svg');
            }
        }
    }

    $(window).scroll(function() {
        navScroll();
    });

    $(document).ready(function() {
        navScroll();
    });



    if(window.matchMedia('screen and (min-width: 992px)').matches){
        let tilesBlocktWidth = $('.main_categories_tiles_block').width();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('width', tilesBlocktWidth + 14);
        let CategoriesMenuWidth = $('.main_categories_list').width();
        let CategoriesSubMenuPosition = $('.main_categories_submenu_list').css('left', CategoriesMenuWidth);
    }





    $('button.hamburger').addClass('is-unactive');
    $('button.hamburger').click(function() {
        let toggleHamburgerClass = $(this).toggleClass('is-unactive');
    });




    $('.desktop_toggle_menu_icon').click(function() {
        let toggleIcon = $(this).toggleClass('is-active');
        let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper').toggleClass('opened');
    })




    $('.header_account_button').click(function(e) {
        e.stopPropagation()
        let DesktopAcoountButtonWidth = $('.header_account_button ').width();
        $('.desktop_account_toggle_menu').toggleClass('opened');
        $(this).toggleClass('dropdown_rotation');
        $('.desktop_account_toggle_menu').css('width', DesktopAcoountButtonWidth + 45);
    });

    $(document).click(function() {
        $('.desktop_account_toggle_menu').removeClass('opened');
    });


    $(function(){
      $(".expert_intelligance_tile_text").each(function(i){

        var maxAllowedSymbols = 462;

        var currentSymbolsCount=$(this).text().length;

        var currentSymbolsOverflow = maxAllowedSymbols - currentSymbolsCount;

        if(currentSymbolsCount > maxAllowedSymbols)
        {
          $(this).text($(this).text().slice(0,currentSymbolsOverflow) + '...');
        }
      });       
    });



    $('img.svg').each(function() {
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            let $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



});