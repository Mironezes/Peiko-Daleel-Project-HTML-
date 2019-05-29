$(document).ready(function() {

    function navScroll() {

        let y = window.scrollY;

        if (y > 70) {
            if ($('div').hasClass('homepage')) {
                $('.header_wrapper').addClass('white');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__dark.svg')
                $('.mobile_menu_icon ').addClass('blue');
            }
            $('.header_navigation_block').addClass('opened');


        } else {
            if ($('div').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__white.svg')
                $('.mobile_menu_icon ').removeClass('blue');
            }
            $('.header_navigation_block').removeClass('opened');
        }
    }

    $(window).scroll(function() {
        navScroll();
    });
    navScroll();



    function mobileAccountMenu__Settings() {
        let fixedContent = $('html');
        let mobileMenuIcon =  $('.mobile_menu_icon');
        let mobileToggleMenuBlock = $('.mobile_toggle_menu_block');
        let mobileAccountToggleMenuBlock = $('.mobile_account_toggle_menu_block');

        $('.mobile_account_icon').on("click", function() {
            mobileMenuIcon.removeClass('is-active');
            mobileMenuIcon.addClass('is-unactive');

            mobileToggleMenuBlock.removeClass('opened');

            if (mobileAccountToggleMenuBlock.hasClass('opened')) {
                mobileAccountToggleMenuBlock.removeClass('opened');
                fixedContent.removeClass('fixed');
            } else {
                mobileAccountToggleMenuBlock.addClass('opened');
                fixedContent.addClass('fixed');
            }

        })
    }
    mobileAccountMenu__Settings();



    function mobileMenu__Settings() {
        $('.mobile_menu_icon').on("click", function() {
            let fixedContent = $('html');
            let toggleMenu = $('.mobile_toggle_menu_block')
            let toggleHeaderNavClass = $('.header_navigation_block_wrapper')
            let mobileAccountMenu = $('.mobile_account_toggle_menu_block').removeClass('opened');
            let headerWrapper = $('.header_wrapper');
            let headerLogo = $('.logo');


            if (fixedContent.hasClass('fixed')) {
                fixedContent.removeClass('fixed');
                toggleMenu.removeClass('opened');
                toggleHeaderNavClass.removeClass('white');
            }
            else {
                fixedContent.addClass('fixed');
                toggleMenu.addClass('opened');
                toggleHeaderNavClass.addClass('white');    
            }

            if (headerWrapper.hasClass('mobile_transparent')) {
                headerWrapper.toggleClass('white');
                $(this).toggleClass('blue');
                if (headerWrapper.hasClass('white')) {
                    headerLogo.attr('src', 'assets/header/logo__dark.svg');
                } else {
                    headerLogo.attr('src', 'assets/header/logo__white.svg');
                }
            }

        })
    }
    mobileMenu__Settings();



    function categoriesMenu__Mobile_Settings() {
        let categoriesMenuItemHeight = $('.main_categories_list__item ').height();
        let categoriesSubMenuWidth = $('.main_categories_submenu_list').css('top', categoriesMenuItemHeight + 1);
        categoriesSubMenuWidth.css({'width': '100%', 'left': '0'})
        let categoriesMenuDropdownItem = $('.main_categories_list__dropdown_item');

        categoriesMenuDropdownItem.on("click", function() {
            if ($(this).hasClass("opened")) {
                $(this).removeClass("opened");
            } else {
                $(this).addClass("opened");
            }
        });
    }



    function suppliersOfficesBlock__Mobile_Settings() {
        let suppliersTileLocationOfficesTiles = $('.suppliers_tile_location_offices_tiles');
        let suppliersTileLocationOfficesTileHeight__first = $('.suppliers_tile_location_offices_tile:eq(1)').height();

        suppliersTileLocationOfficesTiles.css('height', suppliersTileLocationOfficesTileHeight__first);

        $('.suppliers_tile_location_offices_tiles_wrapper').append('<div class="suppliers_tile_location_block__all_offices button"> <div class="button__icon"> <img src="/assets/all_offices_icon.svg" alt="Изображение" class="svg"> </div><span>See all offices</span> </div>');


        $('.suppliers_tile_location_offices_tiles_wrapper').on("click", ".suppliers_tile_location_block__all_offices", function() {
            suppliersTileLocationOfficesTiles.css('height', 'unset');
            $(this).remove();
        });
    }
    function suppliersOfficesBlock__Tablet_Settings() {
        let suppliersTileLocationOfficesTiles = $('.suppliers_tile_location_offices_tiles');
        let suppliersTileLocationOfficesTileHeight__first = $('.suppliers_tile_location_offices_tile:eq(1)').height();
        let suppliersTileLocationOfficesTileHeight__second = $('.suppliers_tile_location_offices_tile:eq(2)').height();

        let suppliersTileLocationOfficesTile__maxHeight = Math.max(suppliersTileLocationOfficesTileHeight__first, suppliersTileLocationOfficesTileHeight__second);

        suppliersTileLocationOfficesTiles.css('height', suppliersTileLocationOfficesTile__maxHeight);

        $('.suppliers_tile_location_offices_tiles_wrapper').append('<div class="suppliers_tile_location_block__all_offices button"> <div class="button__icon"> <img src="/assets/all_offices_icon.svg" alt="Изображение" class="svg"> </div><span>See all offices</span> </div>');


        $('.suppliers_tile_location_offices_tiles_wrapper').on("click", ".suppliers_tile_location_block__all_offices", function() {
            suppliersTileLocationOfficesTiles.css('height', 'unset');
            $(this).remove();
        });
    }




    function openToggledSection () {
        let toggledSectionContent = $(this).siblings('.toggled_section_inner_content');
        let toggleCollapseRemover = $(this).parents('.toggled_section');

        toggleCollapseRemover.removeClass('collapsed');
        toggleCollapseRemover.addClass('active');
        toggleCollapseRemover.css('height', '100%');

        toggledSectionContent.addClass('opened');        
        $(this).on('click', closeToggledSection);  
    }
    function closeToggledSection () {
        let toggledSectionContent = $(this).siblings('.toggled_section_inner_content');
        let toggledSectionHeadingHeight = $(this).height();
        let toggleCollapseRemover = $(this).parents('.toggled_section');

        toggleCollapseRemover.removeClass('active');
        toggleCollapseRemover.addClass('collapsed');
        toggleCollapseRemover.css('height', toggledSectionHeadingHeight + 40);        
        toggledSectionContent.removeClass('opened');         

        $(this).on('click', openToggledSection);        
    }


    function suppliersSortingByBlockStyling() {
        let suppliersSortingByBlock = $('.suppliers_sorting_by_block');
        let mainCategoriesSortingLabelWidth  = $('.suppliers_sorting_by_block .main_categories_sorting').width();
        let mainCategoriesSortingLabelHeight  = $('.suppliers_sorting_by_block .main_categories_sorting').height();
        let mainCategoriesSortingBlock = $('.suppliers_sorting_by_block .main_categories_sorting_block');

        mainCategoriesSortingBlock.css('width', mainCategoriesSortingLabelWidth);
        mainCategoriesSortingBlock.css('top', mainCategoriesSortingLabelHeight + 2);       
    }


    function suppliersWorkHistoryTiles__Mobile_Settings() {
        $('.suppliers_work_history_tile').on("click", function(e) {
            e.stopPropagation();

            $(this).find('.suppliers_work_history_tile_modal').addClass('fixed');
            $('html').addClass('fixed');
        });

        $('.suppliers_work_history_tile_modal_close_icon').on("click", function(e) {
            e.stopPropagation();

            let suppliersWorkHistoryTileModal = $(this).parent('.suppliers_work_history_tile_modal');

            suppliersWorkHistoryTileModal.removeClass('fixed');
            $('html').removeClass('fixed');
        });        
    }


    $(window).on('load', function () {
        if (window.matchMedia('screen and (max-width: 767px)').matches) {
            suppliersOfficesBlock__Mobile_Settings();
            categoriesMenu__Mobile_Settings();
            suppliersWorkHistoryTiles__Mobile_Settings();
        }

        if (window.matchMedia('(min-width: 550px) and (max-width: 991px)').matches) {
            suppliersOfficesBlock__Tablet_Settings();
        }


        if (window.matchMedia('screen and (max-width: 991px)').matches) {
            $('.mobile_left_sidebar_menu__hidden').hide();

            suppliersSortingByBlockStyling()

            if($('div').hasClass('suppliers_profile') || $('div').hasClass('product')) {
                $('.main_content_inner section').addClass('toggled_section collapsed');

                $('.toggled_section_heading').each(function() {

                    let toggleCollapseRemover = $(this).parents('.toggled_section');
                    let toggledSectionHeadingHeight = $(this).height();
                    toggleCollapseRemover.css('height', toggledSectionHeadingHeight + 40);


                    $(this).on('click', openToggledSection);
                });  
            }

            if($('div').hasClass('category_a') || $('div').hasClass('category_b') ) {
                    $('.main_content_inner section').each(function() {
                        $(this).addClass('toggled_section collapsed');
                    });

                    $('.toggled_section_heading').each(function() {

                        let toggleCollapseRemover = $(this).parents('.toggled_section');
                        let toggledSectionHeadingHeight = $(this).height();
                        toggleCollapseRemover.css('height', toggledSectionHeadingHeight + 40);


                        $(this).on('click', openToggledSection);
                    });  
                }            
        }

        if(window.matchMedia('screen and (min-width: 992px)').matches) { 
            if($('div').hasClass('suppliers_profile') || $('div').hasClass('product') ) {
                $('.main_content_inner section').removeClass('toggled_section collapsed');

                $('toggled_section_inner_content').each(function() {
                    $(this).parents('section').removeAttr('style');
                });  
            }

            if($('div').hasClass('category_a') || $('div').hasClass('category_b') ) {
                $('.main_content_inner section').removeClass('toggled_section collapsed');

                $('toggled_section_inner_content').each(function() {
                    $(this).parents('section').removeAttr('style');
                });   
            }
        }
    });



});