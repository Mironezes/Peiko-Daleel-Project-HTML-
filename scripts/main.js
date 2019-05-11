$(document).ready(function() {

    $('.owl-carousel.testimonials_tiles_block').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dotsContainer: '.testimonials_dots'
    });

    let owlTestimonials = $('.testimonials_tiles_block');
    owlTestimonials.owlCarousel();

    $('.testimonials_arrows .slider_arrows__next').on("click", function() {
        owlTestimonials.trigger('next.owl.carousel');
    })

    $('.testimonials_arrows .slider_arrows__prev').on("click", function() {
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

    $('.verified_suppliers_arrows .slider_arrows__next').on("click", function() {
        owlSuppliers.trigger('next.owl.carousel');
    })

    $('.verified_suppliers_arrows .slider_arrows__prev').on("click", function() {
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
            540: {
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

    $('.verified_suppliers_categories_next_arrow').on("click", function() {
        owlSuppliersCategory.trigger('next.owl.carousel');
    })

    $('.verified_suppliers_categories_prev_arrow').on("click", function() {
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



    if (window.matchMedia('screen and (min-width: 992px)').matches) {
        let tilesBlocktWidth = $('.main_categories_tiles_block').width();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('width', tilesBlocktWidth + 30);
        let CategoriesMenuWidth = $('.main_categories_list').width();
        let CategoriesSubMenuPosition = $('.main_categories_submenu_list').css('left', CategoriesMenuWidth);


        function suppliersFixedMenu() {
            $('.page_fixed_menu_list a[href*=\\#]').on('click', function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top - 160
                }, 500);
            });
        }
        suppliersFixedMenu();

    }



    function suppliersMenu() {
        $('.suppliers_profile_banner_menu_list a[href*=\\#], .product_page_banner_menu_list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                 scrollTop: $(this.hash).offset().top - 98
            }, 500);
        });
    }
    suppliersMenu();




    $('button.hamburger').addClass('is-unactive');
    $('button.hamburger').on("click", function() {
        let toggleHamburgerClass = $(this);

        if (toggleHamburgerClass.hasClass('is-unactive')) {
            toggleHamburgerClass.removeClass('is-unactive');
            toggleHamburgerClass.addClass('is-active');
        } else {
            toggleHamburgerClass.removeClass('is-active');
            toggleHamburgerClass.addClass('is-unactive');
        }
    });



    function toggleSubMenuBar() {
        $('.desktop_toggle_menu_icon').on("click", function() {
            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                toggleSubMenu.removeClass('opened');
            } else {
                toggleSubMenu.addClass('opened');
            }
        });
    }
    toggleSubMenuBar();



    function toggleSearchBar() {
        $('.header_navigation_search_toggle').on("click", function(e) {
            e.stopPropagation();

            let searchIcon = $(this).find('.search_icon');
            let closeIcon = $(this).find('.close_icon');


            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                searchIcon.addClass('visible');
                closeIcon.removeClass('visible');
                toggleSubMenu.removeClass('opened');
            } else {
                toggleSubMenu.addClass('opened');
                searchIcon.removeClass('visible');
                closeIcon.addClass('visible');
            }


        });

        $(document).click(function(event) {

            let searchIcon = $(this).find('.search_icon');
            let closeIcon = $(this).find('.close_icon');
            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if ($(event.target).closest('.desktop_toggle_menu_block_wrapper').length == 0) {
                toggleSubMenu.removeClass('opened');
                closeIcon.removeClass('visible');
                searchIcon.addClass('visible');
            }
        });
    }
    if ($('body').hasClass('authorized')) {
        toggleSearchBar();
    }



    function headerAccountButton() {
        let headerAccountButtonWidth = $('.header_account_button').width();
        let desktopToggleMenuWidth = $('.desktop_toggle_menu').width();
        let toggleMenuSearchBarWidth = $('.desktop_toggle_menu__search_bar').css('width', desktopToggleMenuWidth + 48 + 20);
        let toggleMenuSearchButton = $('.desktop_toggle_menu__search_button').css('width', headerAccountButtonWidth + 45);


        let supplierFiltingBlockWidth = $('.suppliers_filting_block').width();
        let mainCategoriesSortingServicesBlock = $('.main_categories_sorting_services .main_categories_sorting_block ').css('width', supplierFiltingBlockWidth + 42);


        $('.header_account_button').on("click", function(e) {
            e.stopPropagation()

            let headerAccountButton = $(this);
            let desktopAccountToggleMenu = $('.desktop_account_toggle_menu');

            if (desktopAccountToggleMenu.hasClass('opened')) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown_rotation');
            } else {
                desktopAccountToggleMenu.addClass('opened');
                headerAccountButton.addClass('dropdown_rotation');
            }
        });

        let DesktopAcoountButtonWidth = $('.header_account_button ').width();
        $('.desktop_account_toggle_menu').css('width', DesktopAcoountButtonWidth + 45);

        $(document).on("click", function(event) {

            let desktopAccountToggleMenu = $('.desktop_account_toggle_menu');
            let headerAccountButton = $('.header_account_button');

            if ($(event.target).closest('.desktop_account_toggle_menu').length == 0) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown_rotation');
            }
        });
    }
    headerAccountButton();



    function expertIntelliganceTextLimiter() {
        let textBlockToLimit = $('.expert_intelligance_tile_text');

        let maxAllowedSymbols = 462;

        let currentSymbolsCount = textBlockToLimit.text().length;

        let currentSymbolsOverflow = maxAllowedSymbols - currentSymbolsCount;

        if (currentSymbolsCount > maxAllowedSymbols) {
            textBlockToLimit.text(textBlockToLimit.text().slice(0, currentSymbolsOverflow) + '...');
        }
    }
    expertIntelliganceTextLimiter();



    function suppliersDetailedInfoOverview__showMore() {
        $('.suppliers_detailed_info_overview__show_more').on("click", function() {
            $(this).remove();
            $('.suppliers_detailed_info_overview__detailed').addClass('opened');
        });
    }
    suppliersDetailedInfoOverview__showMore();



    function suppliersWorkHistoryTiles() {
        $('.suppliers_work_history_tile').on("click", function(e) {
            e.stopPropagation();
            let suppliersWorkHistoryTilesWidth = $('.suppliers_work_history_tiles').width();
            let suppliersWorkHistoryTilesHeight = $('.suppliers_work_history_tiles').height();
            if (window.matchMedia('screen and (min-width: 992px)').matches) {
                $(this).find('.suppliers_work_history_tile_modal').css({
                    'width': suppliersWorkHistoryTilesWidth,
                    'height': suppliersWorkHistoryTilesHeight
                });
            }
            if (window.matchMedia('screen and (max-width: 991px)').matches) {
                $(this).find('.suppliers_work_history_tile_modal').css({
                    'width': suppliersWorkHistoryTilesWidth,
                });
            }

            $(this).find('.suppliers_work_history_tile_modal').addClass('opened');
        });

        $(document).on("click", function() {
            $('.suppliers_work_history_tile_modal').removeClass('opened');
        });

        $('.suppliers_work_history_tile_modal_close_icon').on("click", function(e) {
            e.stopPropagation();

            let suppliersWorkHistoryTileModal = $(this).parent('.suppliers_work_history_tile_modal');

            if (suppliersWorkHistoryTileModal.hasClass('opened')) {
                suppliersWorkHistoryTileModal.removeClass('opened');
            } else {
                suppliersWorkHistoryTileModal.addClass('opened')
            }
        });
    }
    suppliersWorkHistoryTiles();



    function tabsFilter() {
        $('.main_categories_sorting__title').on("click", function(e) {

            e.stopPropagation();

            if ($(this).siblings('.main_categories_sorting_block').hasClass('opened')) {
                $(this).siblings('.main_categories_sorting_block').removeClass('opened');
                $(this).parent('.main_categories_sorting').removeClass('active');
            } else {
                $('.main_categories_sorting_block').removeClass('opened');
                $('.main_categories_sorting').removeClass('active');

                if (!($(this).siblings('.main_categories_sorting_block').hasClass('opened'))) {
                    $(this).siblings('.main_categories_sorting_block').addClass('opened');
                    $(this).parent('.main_categories_sorting').addClass('active');
                } else {
                    $(this).siblings('.main_categories_sorting_block').removeClass('opened');
                    $(this).parent('.main_categories_sorting').removeClass('active');
                }
            }
        });

        $('.main_categories_filter_cancel').on("click", function() {
            $('.main_categories_sorting_block').removeClass('opened');
            $('.main_categories_sorting').removeClass('active');
        });


        $(document).on("click", function(event) {
            if ($(event.target).closest('.main_categories_sorting_block').length == 0) {
                $('.main_categories_sorting_block').removeClass('opened');
                $('.main_categories_sorting').removeClass('active');
            }
        });
    }
    tabsFilter();



    $('.suppliers_tile_location_block__all_offices').on("click", function() {

        let suppliersTileLocationMap = $('.suppliers_tile_location_map');
        let suppliersTileLocationOffices = $('.suppliers_tile_location_offices_tiles');

        if (suppliersTileLocationMap.hasClass('active')) {
            suppliersTileLocationMap.removeClass('active');
            suppliersTileLocationOffices.addClass('active');
        } else {
            suppliersTileLocationMap.addClass('active');
            suppliersTileLocationOffices.removeClass('active');
        }
    });



    function pageNavScroll() {

        if ($('body').hasClass('suppliers_profile')) {
            var pageBannerHeight = $('.suppliers_profile_banner_wrapper').height() + 150;
        }

        if ($('body').hasClass('product')) {
            var pageBannerHeight = $('.product_page_banner_wrapper').height() + 60;
        }

        let headerNavigationBlockHeight = $('.header_navigation_block_wrapper').height();
        let suppliersFixedMenuBlock = $('.page_fixed_menu_wrapper');
        let y = window.scrollY;

        if (y > pageBannerHeight) {
            suppliersFixedMenuBlock.addClass('opened');
            suppliersFixedMenuBlock.css('top', headerNavigationBlockHeight - 1);

        } else {
            suppliersFixedMenuBlock.removeClass('opened');
        }

        var scrollPosition = $(window).scrollTop();

        $('section').each(function() {
            var sectionTop = $(this).offset().top - 200;
            var id = $(this).attr('id');

            if (scrollPosition >= sectionTop) {
                $('.page_fixed_menu_list li > a').parent().removeClass('active');
                $('.page_fixed_menu_list li > a[href*=\\#' + id + ']').parent().addClass('active');
            }
        });

    }

    $(window).scroll(function() {
        pageNavScroll();
    });
    pageNavScroll();


    let suppliersMaterialsPhotoHeight__Getter = $('.suppliers_materials_block .suppliers_materials_tile_photo img').height();
    let suppliersMaterialsVideoHeight__Setter = $('.suppliers_materials_block .suppliers_materials_tile_video iframe').css('height', suppliersMaterialsPhotoHeight__Getter);


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