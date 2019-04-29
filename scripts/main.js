$(function(){

    $('.owl-carousel.testimonials_tiles_block').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dotsContainer: '.testimonials_dots'
    });

    var owlTestimonials = $('.testimonials_tiles_block');
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




    var owlSuppliers = $('.verified_suppliers_tiles_block');
    owlSuppliers.owlCarousel();

    $('.verified_suppliers_arrows .slider_arrows__next').click(function() {
        owlSuppliers.trigger('next.owl.carousel');
    })

    $('.verified_suppliers_arrows .slider_arrows__prev').click(function() {
        owlSuppliers.trigger('prev.owl.carousel');
    })




    if(window.matchMedia('screen and (min-width: 992px)').matches) {

        function navScroll() {

        var y = window.scrollY;

        if (y > 70) {
            if($('body').hasClass('homepage')) {
                $('.header_wrapper').addClass('white');
                $('.header_wrapper .logo').attr('src', '/assets/header/logo__dark.svg')
                $('.desktop_toggle_menu_icon').addClass('blue'); 
                $('.desktop_toggle_menu__item').removeClass('white');                 
                $('.desktop_toggle_menu__item').addClass('gray');  
            }
            $('.header_navigation_block').addClass('opened');

            
          } else {
            if($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');        
                $('.header_wrapper .logo').attr('src', '/assets/header/logo__white.svg') 
                $('.desktop_toggle_menu_icon').removeClass('blue');    
                $('.desktop_toggle_menu__item').removeClass('gray');    
                $('.desktop_toggle_menu__item').addClass('white');                                            
            } 
            $('.header_navigation_block').removeClass('opened');                                               
          }
        }

        $(window).scroll(function() {
            navScroll();
        });

        $(document).ready(function() {
            navScroll();
        });


        $( '.desktop_toggle_menu_icon' ).click(function() {
            let toggleIcon = $(this).toggleClass('is-active');
            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper').toggleClass('opened'); 
        })


        let tilesBlocktWidth = $('.main_categories_tiles_block').width();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('width', tilesBlocktWidth + 14);
        let CategoriesMenuWidth = $('.main_categories_list').width();
        let CategoriesSubMenuPosition = $('.main_categories_submenu_list').css('left', CategoriesMenuWidth);
    }



    if(window.matchMedia('screen and (max-width: 991px)').matches){

        $('.mobile_menu_icon').click(function() {
            let fixedContent = $('html').toggleClass('fixed');
            let toggleIcon = $(this).toggleClass('is-active');
            let toggleMenu = $('.mobile_toggle_menu_block').toggleClass('opened'); 
            let toggleHeaderNavClass = $('.header_navigation_block_wrapper').toggleClass('white');

            if($('.header_wrapper').hasClass('mobile_transparent')) {
                $('.header_wrapper').toggleClass('white');  
                $(this).toggleClass('blue');  
                if ($('.header_wrapper').hasClass('white')) {
                    $('.logo').attr('src', '/assets/header/logo__dark.svg');
                }
                else {
                    $('.logo').attr('src', '/assets/header/logo__white.svg');                                              
                }
            }

        })


        function navScroll() {

        var y = window.scrollY;
          if (y > 80) {
            if ($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('mobile_transparent');
                $('.header_wrapper').addClass('white');
                $('.mobile_menu_icon').addClass('blue');
                $('.header_wrapper .logo').attr('src', '/assets/header/logo__dark.svg');
            }
          } else {
            if($('body').hasClass('homepage')) {            
                $('.header_wrapper').removeClass('white');
                $('.mobile_menu_icon').removeClass('blue');
                $('.header_wrapper').addClass('mobile_transparent');        
                $('.header_wrapper .logo').attr('src', '/assets/header/logo__white.svg');    
            }                  
          }
        }

        $(window).scroll(function() {
            navScroll();
        });

        $(document).ready(function() {
            navScroll();
        });

        $('.main_categories_list__dropdown_item').change(function() {
            $(this).toggleClass('opened');
            $(this)
        });

        let CategoriesMenuItemWidth = $('.main_categories_list__item ').width();
        let CategoriesMenuItemHeight = $('.main_categories_list__item ').height(); 
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('top', CategoriesMenuItemHeight);
        let CategoriesMenuDropdownItem = $('.main_categories_list__dropdown_item');

        CategoriesMenuDropdownItem.on("click", function() {
            $(this).toggleClass("opened");          
        });

    }



    $('button.hamburger').addClass('is-unactive');
    $('button.hamburger').click(function() {
        let toggleHamburgerClass = $(this).toggleClass('is-unactive');
    });




    $('img.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

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