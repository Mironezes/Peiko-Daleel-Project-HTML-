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

    $('select').select2({
        minimumResultsForSearch: -1,
        width: 'resolve',
        theme: "default"
    });


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



    function BasicTextLimiter(textBlockToLimit, maxAllowedSymbols) {
        let currentSymbolsCount = textBlockToLimit.text().length;

        let currentSymbolsOverflow = maxAllowedSymbols - currentSymbolsCount;

        if (currentSymbolsCount > maxAllowedSymbols) {
            textBlockToLimit.text(textBlockToLimit.text().slice(0, currentSymbolsOverflow) + '...');
        }
    }

    BasicTextLimiter($('.latest_news_tile__desc'), 150);
    BasicTextLimiter($('.expert_intelligance_tile_text'), 462);


    $(".main_page_categories_tile_desc").each(function() {   
      BasicTextLimiter($(this), 280);
    });

    function authorNameLimiter() {

        $('.latest_news_tile_author span').each(function() {
        let textBlockToLimit = $(this);

        let textBlockContent = $(this).text();

        let maxAllowedSymbols = 12;

        let currentSymbolsCount = textBlockToLimit.text().length;

        let currentSymbolsOverflow = maxAllowedSymbols - currentSymbolsCount;

        if (currentSymbolsCount > maxAllowedSymbols) {
            textBlockToLimit.text(textBlockToLimit.text().slice(0, currentSymbolsOverflow) + '...');

                $(this).attr("title", textBlockContent);
            }
        });
    }
    authorNameLimiter();


    function suppliersDetailedInfoOverview__showMore() {
        $('.suppliers_detailed_info_overview__show_more').on("click", function() {
            $(this).remove();
            $('.suppliers_detailed_info_overview__detailed').addClass('opened');
        });
    }
    suppliersDetailedInfoOverview__showMore();



    function suppliersWorkHistoryTiles__Desktop_Settings() {
        $('.suppliers_work_history_tile').on("click", function(e) {
            e.stopPropagation();
            let suppliersWorkHistoryTilesWidth = $('.suppliers_work_history_tiles').width();
            let suppliersWorkHistoryTilesHeight = $('.suppliers_work_history_tiles').height();

            if (window.matchMedia('screen and (min-width: 768px)').matches) {
                $(this).find('.suppliers_work_history_tile_modal').css({
                    'width': suppliersWorkHistoryTilesWidth,
                    'height': suppliersWorkHistoryTilesHeight                    
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


    function CommonPageFilterBlock() {

        $('.common_sorting__title').on("click", function() {
            $('.common_sorting_block').addClass('empty');
            $('.common_filter_selected_list .common_sorting_block_choosen').remove();
            $('.common_sorting').removeClass('active');
            $(this).parent().addClass('active');
            $(this).removeClass('active');


            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.common_sorting_block').removeClass('opened');
                $('.common_sorting').removeClass('active');
                $('html').removeClass('fixed');
                $('.modal_backdrop').removeClass('active');
                $('.common_filter_selector_desktop_block').removeClass('fixed');
                $('.header_navigation_block_wrapper').show();
            } else {
                $('.common_sorting__title').removeClass('active');
                $(this).addClass('active');

                $('html,body').animate({
                        scrollTop: $(this).offset().top
                    },
                    500);

                $('.common_filter_selector_desktop_block').addClass('fixed');
                $('.header_navigation_block_wrapper').hide();
                $('html').addClass('fixed');
                $('.modal_backdrop').addClass('active');
                $('.common_sorting_block').addClass('opened');
            }
        });

        $('.common_filter_cancel').on("click", function() {
            $('.common_sorting_block').removeClass('opened');
            $('.common_sorting').removeClass('active');
            $('html').removeClass('fixed');
            $('.modal_backdrop').removeClass('active');
            $('.common_filter_selector_desktop_block').removeClass('fixed');
            $('.header_navigation_block_wrapper').show();
        });


        $('.common_filter_clear').on("click", function() {
            commonFilterClearAll();
            $('.common_filter_selected_list').find('.common_sorting_block_choosen').remove();
            $('.common_filter_clear__small').removeClass('active');
            $('.common_filter_show').removeClass('active');
        });

        function commonFilterClearAll() {
            $('input').each(function() {
                $(this).removeAttr("checked");
            });
            $('.common_sorting_element, .common_sorting_element_radio label').each(function() {
                $(this).removeClass("checked");
            });
            $('.common_sorting_block_content_block .common_sorting_block_choosen').empty();
        }


        $('.common_sorting_region .common_sorting__title').on("click", function() {
            $('.common_sorting_block').removeClass('full_height');
            $('.common_sorting_block_content').removeClass('active');
            $('.common_sorting_block_content__region').addClass('active');
        });

        $('.common_sorting_major_clients .common_sorting__title').on("click", function() {
            $('.common_sorting_block_content').removeClass('active');
            $('.common_sorting_block_content__major_clients').addClass('active');
            $('.common_sorting_block').addClass('full_height');
        });


        $('.common_sorting_services .common_sorting__title').on("click", function() {
            $('.common_sorting_block_content').removeClass('active');
            $('.common_sorting_block_content__services').addClass('active');
            $('.common_sorting_block').addClass('full_height');
        });

        $('.common_sorting_verifed_track_record .common_sorting__title').on("click", function() {
            $('.common_sorting_block').removeClass('full_height');
            $('.common_sorting_block_content').removeClass('active');
            $('.common_sorting_block_content__verifed_track_record').addClass('active');
        });

        $('.common_sorting_product_perfomance_data .common_sorting__title').on("click", function() {
            $('.common_sorting_block').removeClass('full_height');
            $('.common_sorting_block_content').removeClass('active');
            $('.common_sorting_block_content__product_perfomance_data').addClass('active');
        });




        $('.common_sorting_element_checkbox').each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $('.common_sorting_block').removeClass('empty');
                $(this).addClass('checked');

                if ($(this).find('input').is(":checked")) {

                    $(this).removeClass('checked');

                    $(this).find('input').removeAttr('checked');


                    let content = $(this).find('input').attr("data-set");

                    $(this).parents().find("[data-get='" + content + "']").remove();


                } else {

                    $(this).find('input').attr("checked", "checked");

                    $(".common_sorting_block_choosen").append('<span class="tag" data-get="' + String(($(this).find('input').attr('data-set'))) + '">' + String(($(this).find('input').attr('data-set'))) + '</span>');
                }
            });
        });

        $('.common_sorting_element_radio').each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $('.common_sorting_block').removeClass('empty');


                if ($(this).find('input:first').is(":checked")) {
                    
                    $(this).find('label:first').removeClass('checked');
                    $(this).find('label:last').addClass('checked');

                    $(this).find('input:first').removeAttr('checked');
                    $(this).find('input:last').attr("checked", "checked");

                    let content = $(this).find('input').attr("data-set");

                    $(this).parents().find("[data-get='" + content + "']").remove();


                } else {
                    $(this).find('input:last').removeAttr('checked');
                    $(this).find('input:first').attr("checked", "checked");

                    $(".common_sorting_block_choosen").append('<span class="tag" data-get="' + String(($(this).find('input').attr('data-set'))) + '">' + String(($(this).find('input').attr('data-set'))) + '</span>');
                }
            });
        });

        $(".common_sorting_block_choosen").on("click", ".tag", function() {
            let content = $(this).text();

            if (($(this).parents().find("[data-set='" + content + "']"))) {
                $(this).parents().find("[data-set='" + content + "']").removeAttr('checked');
                $(this).parents().find("[data-set='" + content + "']").parents('.common_sorting_element').removeClass('checked');
            }
            $(this).remove();
        });


        $(document).on("click", function(event) {
            if ($(event.target).closest('.common_sorting_block').length == 0) {}
        });

        $('.common_filter_clear__small').on("click", function() {
            $(this).removeClass('active');
        });



        $('.common_show_companies_button').on("click", function(e) {
            e.preventDefault();

                $('.common_show_companies_button').removeAttr('disabled');  
                if($('.common_sorting_block').hasClass('empty')) {
                    $('.common_filter_clear__small').removeClass('active');                    
                }
                else {
                    $('.common_filter_clear__small').addClass('active');                    
                }

                $('.common_sorting_block_choosen').clone().appendTo('.common_filter_selected_list');
                $('.common_sorting_block').removeClass('opened');
                $('.common_sorting').removeClass('active');
                $('html').removeClass('fixed');
                $('.modal_backdrop').removeClass('active');
                $('.common_filter_selector_desktop_block').removeClass('fixed');
                $('.header_navigation_block_wrapper').show();       
                $('.common_filtering_desktop_block').addClass('active');     
                commonFilterClearAll();                      

                let commonFilterSelectedListHeight = $('.common_filter_selected_list').height();
                let commonFilterSelectedList = $('.common_filter_selected_list');

                if(commonFilterSelectedListHeight > 50) {
                    $('.common_filter_show').addClass('active');
                    $('.common_filter_show span').removeClass('active');
                    $('.common_filter_show__less').addClass('active');                    
                }
        });

        
        $(".common_filter_selected_list .common_sorting_block_choosen span").on("click", function() {
            $('body').addClass('pizdec');           
        });


        $('.common_filter_show__more').on("click", function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.common_filter_show__less').addClass('active');
                $('.common_filter_selected_list').css('max-height', 'unset');                
            }
            else {
                $('.common_filter_selected_list .common_sorting_block_choosen').addClass('opened');        
                $('.common_filter_selected_list').css('max-height', '45px');                       
            }
        });

        $('.common_filter_show__less').on("click", function() {

            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.common_filter_show__more').addClass('active');
                $('.common_filter_selected_list').css('max-height', '45px');
            }
            else {
                $('.common_filter_selected_list').css('max-height', 'unset');                
                $('.common_filter_selected_list .common_sorting_block_choosen').removeClass('opened');             
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
        if ($('div').hasClass('suppliers_profile')) {
            var pageBannerHeight = $('.suppliers_profile_banner_wrapper').height() + 150;
        }
        if ($('div').hasClass('product')) {
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



    function accountSettingsPage_Dropdowns() {

        $('.account_settings_element_dropdown__title').on('click', function(e) {
            e.stopPropagation();
            if ($(this).siblings('.account_settings_element_dropdown_block').hasClass('opened')) {
                $(this).siblings('.account_settings_element_dropdown_block').removeClass('opened');
                $(this).parent('.account_settings_element_dropdown_wrapper').removeClass('active');
            } else {
                $('.account_settings_element_dropdown_block').removeClass('opened');
                $('.account_settings_element_dropdown_wrapper').removeClass('active');

                if (!($(this).siblings('.account_settings_element_dropdown_block').hasClass('opened'))) {
                    $(this).siblings('.account_settings_element_dropdown_block').addClass('opened');
                    $(this).parent('.account_settings_element_dropdown_wrapper').addClass('active');
                } else {
                    $(this).siblings('.account_settings_element_dropdown_block').removeClass('opened');
                    $(this).parent('.account_settings_element_dropdown_wrapper').removeClass('active');
                }
            }
        });


        $('.account_settings_element_dropdown_element').on('click', function() {
            if ($(this).hasClass('active')) {
                $('.account_settings_element_dropdown_element').removeClass('active');
                $(this).removeClass('active');
                $(this).find('input[type="radio"]').prop('checked', false);
            }
            if (!$(this).hasClass('active')) {
                $('.account_settings_element_dropdown_element').removeClass('active');
                $(this).addClass('active');
                $(this).find('input[type="radio"]').attr('checked', 'checked');
                $(this).parents('.account_settings_element_dropdown_wrapper').find('.account_settings_element_dropdown__title span').html($(this).find('input[type="radio"]').val());
            }
        });



        $(document).on("click", function(event) {
            if ($(event.target).closest('.account_settings_element_dropdown_block').length == 0) {
                $('.account_settings_element_dropdown_block').removeClass('opened');
                $('.account_settings_element_dropdown_wrapper').removeClass('active');
            }
        });
    }
    accountSettingsPage_Dropdowns();




    function categoriesMenu__Desktop_Settings() {
        let tilesBlockWidth = $('.main_categories_tiles_block').width();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('width', tilesBlockWidth + 30);
        CategoriesSubMenuWidth.css('top', '0');
        let CategoriesMenuWidth = $('.main_categories_list').width();
        let CategoriesSubMenuPosition = $('.main_categories_submenu_list').css('left', CategoriesMenuWidth);
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

    function suppliersMainPageImageSizing() {
        let suppliersTileCompanyLinksBlockHeight = $('.suppliers_tile_long.suppliers_tile .suppliers_tile_company_links_column').height();
        let suppliersTileCompanyImgBlockHeight = $('.suppliers_tile_long.suppliers_tile .suppliers_tile_company_img_column').css('height', suppliersTileCompanyLinksBlockHeight);
    }

    function suppliersTileRadialBlockSizing() {
        let suppliersTileCompanyLinksBlockWidth = $('.suppliers_tile_company_links_column').width();
        let suppliersTileRadialblockWidth = $('.suppliers_tile_radial_block').css('width', suppliersTileCompanyLinksBlockWidth);
    }


    function suppliers_Tile_Short_SummaryReview_Linear_Criteria_Width() {
        let suppliersTileCompanyInfoOveralAndMajorCategoriesWidth = $('.suppliers_tile_short.suppliers_tile .suppliers_tile_company_info_overal_and_major_categories_wrapper').width();
        let suppliersTileLinearBlockWidth = $('.suppliers_tile_short.suppliers_tile .suppliers_tile_linear_block').css('width', suppliersTileCompanyInfoOveralAndMajorCategoriesWidth);
    }



    function suppliers_Tile_SummaryReview_Linear_Criteria_Width() {
        let suppliersTileCompanyInfoAndHighlightsBlockWidth = $('.suppliers_tile_long.suppliers_tile .suppliers_tile_company_info_and_highlights_block').width();
        let suppliersTileLinearBlockWidth = $('.suppliers_tile_long.suppliers_tile .suppliers_tile_linear_block').css('width', suppliersTileCompanyInfoAndHighlightsBlockWidth);
    }

    $(window).on('load resize', function() {

        let suppliersMaterialsPhotoHeight__getter = $('.suppliers_materials_block .suppliers_materials_tile_photo img').height();
        let suppliersMaterialsVideoHeight__setter = $('.suppliers_materials_block .suppliers_materials_tile_video iframe').css('height', suppliersMaterialsPhotoHeight__getter);

        subscribePageAccordions();

        if (window.matchMedia('screen and (min-width: 768px)').matches) {
            categoriesMenu__Desktop_Settings();
            subscribePlan_DaleelTable__Desktop_Settings();
            choosePerfectPlanTable__Desktop_Settings();
            suppliersWorkHistoryTiles__Desktop_Settings();
        }
        if (window.matchMedia('screen and (min-width: 992px)').matches) {
            suppliersFixedMenu();
            yesNoFiltersWidth__Desktop_Settings();
            searchPageToggleFilters();
            accountPageToggleFilters();
            suppliers_Tile_Short_SummaryReview_Linear_Criteria_Width();
            suppliers_Tile_SummaryReview_Linear_Criteria_Width();
            suppliersTileRadialBlockSizing();
        }
        if (window.matchMedia('screen and (min-width: 1320px)').matches) {
            suppliersMainPageImageSizing();
        }
    });



    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.choose_profile_image_profile_picture').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".choose_profile_image_file_upload").on('change', function() {
        readURL(this);
        $('.choose_profile_image_preview').addClass('active');
    });

    $(".choose_profile_image_file_upload_button, .choose_profile_image_profile_picture_picker_block").on('click', function() {
        $(".choose_profile_image_file_upload").click();
    });



    function categoriesPageTagsModal() {
        let modalTrigger = $('.to_tags_modal');

        $(modalTrigger).on('click', function() {
            $('.categories_tags_modal_block').addClass('opened');
            $('html').addClass('fixed');
            $('.modal_backdrop').addClass('active');
            $('.header_wrapper').addClass('overlay');

            let closeModal = $('.categories_tags_modal_close');
            closeModal.on('click', function() {
                $(this).parents('.categories_tags_modal_block').removeClass('opened');
                $('html').removeClass('fixed');
            	$('.header_wrapper').removeClass('overlay');                
            	$('.modal_backdrop').removeClass('active');        
            });

            $(document).mouseup(function(e) 
            {
                let container = $(".categories_tags_modal_block");

                if (!container.is(e.target) && container.has(e.target).length === 0) 
                {
                container.removeClass('opened');
                $('html').removeClass('fixed');
                $('.header_wrapper').removeClass('overlay');                
                $('.modal_backdrop').removeClass('active');   
                }
            });

        });




    }
    categoriesPageTagsModal();


    $('.suppliers_tile_summary_review__criteria__indicator_value').each(function() {
        let value = $(this).attr('data-value');
        $(this).css('width', value + '%');
    });


    function creatingPage__addNewImage() {
        $('.create_page_add_image_tile_button').on('click', function(){
            let siblings = $(this).siblings('.creation_page_add_image_tiles');
            let content = $(this).siblings('.creation_page_add_image_tiles').find('.creation_page_add_image_tile:first').clone();
            content.appendTo(siblings);
        });
    }
    creatingPage__addNewImage();

    function creatingPage__addNewVideo() {
        $('.create_page_add_video_tile_button').on('click', function(){
            let siblings = $(this).siblings('.creation_page_add_video_tiles');
            let content = $(this).siblings('.creation_page_add_video_tiles').find('.creation_page_add_video_tile:first').clone();
            content.appendTo(siblings);
        });
    }
    creatingPage__addNewVideo();


    function creatingPage__removeMultimedia() {
        $('.creation_page_add_image_tiles').on('click', '.creation_page_element__file_delete_button', function() {
            // здесь мог быть мой код, но будет твой =(
        });

    }
    creatingPage__removeMultimedia();



});