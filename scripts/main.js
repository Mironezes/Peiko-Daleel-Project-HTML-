$(document).ready(function() {

    $('.owl-carousel.testimonials_tiles_block').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 10000,
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
        autoplay: true,
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
        items: 5,
        loop: true,
        autoplay: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                center: true,
                items: 1,
            },
            // breakpoint from 480 up
            540: {
                center: true,
                margin: 0,
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 3,
            },
            992: {
                items: 5,
                center: true,
                margin: 20
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
            if ($('div').hasClass('homepage')) {
                $('.header_wrapper').removeClass('mobile_transparent');
                $('.header_wrapper').addClass('white');
                $('.desktop_toggle_menu_icon').addClass('blue');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__dark.svg');
                $('.desktop_toggle_menu__item').removeClass('white');
            }
        } else {
            if ($('div').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');
                $('.desktop_toggle_menu_icon').removeClass('blue');
                $('.header_wrapper').addClass('mobile_transparent');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__white.svg');
                $('.desktop_toggle_menu__item').addClass('white');
            }
        }
    }

    $(window).scroll(function() {
        navScroll();
    });

    $(document).ready(function() {
        navScroll();
    });




    function suppliersFixedMenu() {
        $('.page_fixed_menu_list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 160
            }, 500);
        });
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




    function categoryMenu() {
        $('.left_sidebar_menu a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 120
            }, 500);
        });
    }
    categoryMenu();



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


        let supplierfilteringBlockWidth = $('.suppliers_filtering_desktop_block').width();
        let mainCategoriesSortingServicesBlock = $('.main_categories_sorting_services .main_categories_sorting_block ').css('width', supplierfilteringBlockWidth + 42);


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



    function SuppliersPageFilterBlock() {
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
    SuppliersPageFilterBlock();


    function CommonPageFilterBlock() {
        $('.common_sorting__title').on("click", function(e) {

            e.stopPropagation();

            if ($(this).siblings('.common_sorting_block').hasClass('opened')) {
                $(this).siblings('.common_sorting_block').removeClass('opened');
                $(this).parent('.common_sorting').removeClass('active');
            } else {
                $('.common_sorting_block').removeClass('opened');
                $('.common_sorting').removeClass('active');

                if (!($(this).siblings('.common_sorting_block').hasClass('opened'))) {
                    $(this).siblings('.common_sorting_block').addClass('opened');
                    $(this).parent('.common_sorting').addClass('active');
                } else {
                    $(this).siblings('.common_sorting_block').removeClass('opened');
                    $(this).parent('.common_sorting').removeClass('active');
                }
            }
        });

        $('.common_filter_cancel').on("click", function() {
            $('.common_sorting_block').removeClass('opened');
            $('.common_sorting').removeClass('active');
        });


        $(document).on("click", function(event) {
            if ($(event.target).closest('.common_sorting_block').length == 0) {
                $('.common_sorting_block').removeClass('opened');
                $('.common_sorting').removeClass('active');
            }
        });
    }
    CommonPageFilterBlock();




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




    $('.common_sorting_by_block .common_sorting_element input[type="radio"]').each(function() {

        let sortBy__default_type = $('.common_sorting_by_block .common_sorting_element input[type="radio"]:checked').val();
        let sortBy__default_title = $('.common_sorting_by_block .common_sorting__title span').html(sortBy__default_type);

        $(this).on('click', function() {
            let sortBy__set_type = $(this).val();
            let sortBy__set_title = $('.common_sorting_by_block .common_sorting__title span').html(sortBy__set_type);
        });
    });



    function categoriesMenu__Desktop_Settings() {
        let tilesBlockWidth = $('.main_categories_tiles_block').width();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('width', tilesBlockWidth + 30);
        CategoriesSubMenuWidth.css('top', '0');
        let CategoriesMenuWidth = $('.main_categories_list').width();
        let CategoriesSubMenuPosition = $('.main_categories_submenu_list').css('left', CategoriesMenuWidth);


        $('.main_categories_submenu_list').each(function() {
        	mainCategoriesListChildrenCount = $(this).children().length;
        	if (mainCategoriesListChildrenCount == 1) {
        		$(this).addClass('one_column');
        	}
        });
    }



    function yesNoFiltersWidth__Desktop_Settings() {
        let mainCategoriesSortingProductPerfomanceDataLabelWidth = $('.main_categories_sorting_product_perfomance_data').width();
        let mainCategoriesSortingVerifiedTrackRecordLabelWidth = $('.main_categories_sorting_verifed_track_record').width();


        $('.main_categories_sorting_product_perfomance_data .main_categories_sorting_block').css('width', mainCategoriesSortingProductPerfomanceDataLabelWidth);
        $('.main_categories_sorting_verifed_track_record .main_categories_sorting_block').css('width', mainCategoriesSortingVerifiedTrackRecordLabelWidth);
    }



    function searchPageToggleFilters() {
        let searchPageFilteringButton = $('.search_page_filtering_block button');
        let searchPageFilteringButton__default = $('#search_page_filtering__all_results');
        let searchPageFilteringButtonActive = $('.search_page_filtering_block button.active');
        let searchPageFilteringButtonActiveCounter = 0;

        $(searchPageFilteringButton).on('click', function() {
            searchPageFilteringButton__default.removeClass('active');
            let searchPageFilteringButtonActive = $('.search_page_filtering_block button.active');

            if (searchPageFilteringButton__default.hasClass('active')) {
                $(searchPageFilteringButton__default).removeClass('active');
                searchPageFilteringButtonActiveCounter -= 1;
            }

            if ($(this).hasClass('active')) {
                ToggleFiltersRemove($(this), searchPageFilteringButtonActiveCounter.length);
                searchPageFilteringButtonActiveCounter -= 1;
            } else {
                ToggleFiltersAdd($(this), searchPageFilteringButtonActiveCounter.length);
                searchPageFilteringButtonActiveCounter += 1;
            }

            if (searchPageFilteringButtonActiveCounter == searchPageFilteringButton.length - 1) {
                searchPageFilteringButtonActiveCounter = 1;
                searchPageFilteringButton.removeClass('active');
                searchPageFilteringButton__default.addClass('active');
            }

            console.log('TOTAL:' + searchPageFilteringButton.length)
            console.log('ACTIVE:' + searchPageFilteringButtonActiveCounter);

        });
    }



    function accountPageToggleFilters() {
        let accountPageFilteringButton = $('.account_page_filtering_block button');
        let accountPageFilteringButton__default = $('#account_page_filtering__all_results');
        let accountPageFilteringButtonActiveCounter = 1;
        let accountPageFilteringButtonActive = $('.account_page_filtering_block button.active');

        $(accountPageFilteringButton).on('click', function() {

            if (accountPageFilteringButton__default.hasClass('active')) {
                $(accountPageFilteringButton__default).removeClass('active');
                accountPageFilteringButtonActiveCounter -= 1;
            }

            if ($(this).hasClass('active')) {
                ToggleFiltersRemove($(this), accountPageFilteringButtonActiveCounter.length);
                accountPageFilteringButtonActiveCounter -= 1;
            } else {
                ToggleFiltersAdd($(this), accountPageFilteringButtonActiveCounter.length);
                accountPageFilteringButtonActiveCounter += 1;
            }

            if (accountPageFilteringButtonActiveCounter == accountPageFilteringButton.length - 1) {
                accountPageFilteringButtonActiveCounter = 1;
                accountPageFilteringButton.removeClass('active');
                accountPageFilteringButton__default.addClass('active');
            }
        });
    }



    function ToggleFiltersAdd(button, counter) {
        button.addClass('active');
        counter++;
    }

    function ToggleFiltersRemove(button, counter) {
        button.removeClass('active');
        counter--;
    }



    function categoryPageNavScroll() {
        let leftSidebarMenuHeight = $('.left_sidebar_menu').height();
        let leftSidebarMenuWrapperHeight = $('.left_sidebar_menu_wrapper').css('height', leftSidebarMenuHeight);
        let leftSidebarMenuWidth = $('.left_sidebar_menu_icon').width();
        let leftSidebarMenuWrapperWidth = $('.left_sidebar_menu_wrapper').css('width', leftSidebarMenuWidth + 2);


        let leftSidebarMenuItem = $('.left_sidebar_menu__item');
        leftSidebarMenuItem.hover(function() {
            let leftSidebarMenu = $('.left_sidebar_menu');
            if (leftSidebarMenu.hasClass('opened')) {
                leftSidebarMenu.removeClass('opened');
            } else {
                leftSidebarMenu.addClass('opened');
            }
        });

    }



    function categoryPageNavHightlightOnScroll() {
        var sidebarScrollPosition = $(window).scrollTop();

        $('.category_sections_block section').each(function() {
            let sectionTop = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (sidebarScrollPosition >= sectionTop) {
                $('.left_sidebar_menu__item a').parent().removeClass('active');
                $('.left_sidebar_menu__item a[href*=\\#' + id + ']').parent().addClass('active');
            }
        });
    }
    $(window).scroll(function() {
        categoryPageNavHightlightOnScroll();
    });
    categoryPageNavScroll();



    function accountTabs() {
        $('.account_tabs_header').on('click', 'span:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active').closest('.account_tabs_block').find('.account_tab_content').removeClass('active').eq($(this).index()).addClass('active');
        });
    }
    accountTabs();



    function subscribePlan_DaleelTable__Desktop_Settings() {
        let subscribePageWhyDaleelTableMindsFirstHeight = $('#subscribe_page_why_daleel_table_minds_first').height();
        let subscribePageWhyDaleelTableMindsSecondHeight = $('#subscribe_page_why_daleel_table_minds_second').height();
        let subscribePageWhyDaleelTableMindsThirdHeight = $('#subscribe_page_why_daleel_table_minds_third').height();

        let subscribePageWhyDaleelTableWeMathFirst = $('#subscribe_page_why_daleel_table_we_match_first').css('height', subscribePageWhyDaleelTableMindsFirstHeight + 1);
        let subscribePageWhyDaleelTableWeMathSecond = $('#subscribe_page_why_daleel_table_we_match_second').css('height', subscribePageWhyDaleelTableMindsSecondHeight + 1);
        let subscribePageWhyDaleelTableWeMathThird = $('#subscribe_page_why_daleel_table_we_match_third').css('height', subscribePageWhyDaleelTableMindsThirdHeight);
    }



    function subscribePageAccordions() {
        let subscribePageFaqAccordionsHeader = $('.subscribe_page_faq_accordions_header');
        let subscribePageFaqAccordionsBody = $('.subscribe_page_faq_accordions_body');
        let subscribePageFaqAccordionsBodyMaxHeightLimiter = 500;

        $('.subscribe_page_faq_accordions_header').on('click', function() {

            subscribePageFaqAccordionsBody.removeClass('opened');
            subscribePageFaqAccordionsHeader.removeClass('active');

            $(this).addClass('active');
            $(this).parent().find(subscribePageFaqAccordionsBody).addClass('opened');
        });



        $('.subscribe_page_faq_accordion').each(function() {
            let accordionHeightValue = $(this).find('.subscribe_page_faq_accordions_body_inner').css('height');
            let accordionHeightValue_parsed = parseInt(accordionHeightValue);

            if (accordionHeightValue_parsed > subscribePageFaqAccordionsBodyMaxHeightLimiter) {
                $(this).find('.subscribe_page_faq_accordions_body').addClass('scrolled');
            }
        });
    }


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


    function choosePerfectPlanTable__Desktop_Settings() {
        let tableHeadSectionHeight = $('.subscribe_page_choose_perfect_plan_second_column .choose_perfect_plan_table_cell__head').height();
        let tableHeadSectionPadding = 30;
        let tableHeadSectionTitleHeight = $('.subscribe_page_choose_perfect_plan_third_column .choose_perfect_plan_table_cell__head h3').height();
        $('.choose_perfect_plan_table_cell__head').each(function() {
            $(this).css('height', tableHeadSectionHeight + (tableHeadSectionPadding * 2));
            $(this).find('h3').css('height', tableHeadSectionTitleHeight);
        });
    }


    $(window).on('load resize', function() {

        let suppliersMaterialsPhotoHeight__getter = $('.suppliers_materials_block .suppliers_materials_tile_photo img').height();
        let suppliersMaterialsVideoHeight__setter = $('.suppliers_materials_block .suppliers_materials_tile_video iframe').css('height', suppliersMaterialsPhotoHeight__getter);

        subscribePageAccordions();

        if (window.matchMedia('screen and (min-width: 768px)').matches) {
            categoriesMenu__Desktop_Settings();
            subscribePlan_DaleelTable__Desktop_Settings();
            choosePerfectPlanTable__Desktop_Settings();
        }
        if (window.matchMedia('screen and (min-width: 992px)').matches) {
            suppliersFixedMenu();
            yesNoFiltersWidth__Desktop_Settings();
            searchPageToggleFilters();
            accountPageToggleFilters();
        }

    });


});