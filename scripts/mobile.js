        function navScroll() {

        let y = window.scrollY;

        if (y > 70) {
            if($('body').hasClass('homepage')) {
                $('.header_wrapper').addClass('white');
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__dark.svg')
                $('.desktop_toggle_menu_icon').addClass('blue'); 
                $('.desktop_toggle_menu__item').removeClass('white');                 
                $('.desktop_toggle_menu__item').addClass('gray');  
            }
            $('.header_navigation_block').addClass('opened');

            
          } else {
            if($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');        
                $('.header_wrapper .logo').attr('src', 'assets/header/logo__white.svg') 
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


        $('.mobile_account_icon').click(function() {     
            $('.mobile_menu_icon').removeClass('is-active');
            $('.mobile_toggle_menu_block').removeClass('opened');       
            $('.mobile_account_toggle_menu_block').toggleClass('opened'); 
        })


        $('.left_sidebar_menu__current_item').click(function() {           
            $('.left_sidebar_menu').toggleClass('opened'); 
        })



    $('.mobile_menu_icon').click(function() {
        let fixedContent = $('html').toggleClass('fixed');
        let toggleIcon = $(this).toggleClass('is-active');
        let toggleMenu = $('.mobile_toggle_menu_block').toggleClass('opened');
        let toggleHeaderNavClass = $('.header_navigation_block_wrapper').toggleClass('white');

        if ($('.header_wrapper').hasClass('mobile_transparent')) {
            $('.header_wrapper').toggleClass('white');
            $(this).toggleClass('blue');
            if ($('.header_wrapper').hasClass('white')) {
                $('.logo').attr('src', 'assets/header/logo__dark.svg');
            } else {
                $('.logo').attr('src', 'assets/header/logo__white.svg');
            }
        }

    })

    $('.left_sidebar_menu__current_item').click(function() {
        $(this).toggleClass('opened');
    });


    if(window.matchMedia('screen and (max-width: 991px)').matches){

        $('.mobile_left_sidebar_menu__hidden').hide();

        let CategoriesMenuItemWidth = $('.main_categories_list__item ').width();
        let CategoriesMenuItemHeight = $('.main_categories_list__item ').height();
        let CategoriesSubMenuWidth = $('.main_categories_submenu_list').css('top', CategoriesMenuItemHeight);
        let CategoriesMenuDropdownItem = $('.main_categories_list__dropdown_item');

        CategoriesMenuDropdownItem.on("click", function() {
            $(this).toggleClass("opened");
        });
    }

