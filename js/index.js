$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    // nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
    // SWIPER
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });



    $(document).ready(function () {
        $('.flag-name,.lang-icon').click(function () {
            $('.langs').fadeToggle('slow', function () {

            })
        })

        $('.fa-bars').click(function () {
            $('.header-navigation__menu').toggleClass('showMenu')
        })
        $('.fa-times').click(function () {
            $('.header-navigation__menu').toggleClass('showMenu')
        })

        $('.fa-chevron-down').click(function () {
            $('.fa-chevron-down').not($(this)).parent().find('.header-navigation__submenu').slideUp('fast')
            $(this).parent().find('.header-navigation__submenu').slideToggle('fast')


        })

        $('.search-mobile').click(function () {

            $('.header-mobile__search').slideToggle('fast', function () {
                if ($('.header-navigation__menu--language').hasClass('down')) {
                    $('.header-navigation__menu--language').removeClass('down')
                }
                else {
                    $('.header-navigation__menu--language').addClass('down')
                }
            })


        })

        $('.fa-chevron-up').click(function(){
            $(window).scrollTop(0)
        })

        $(window).resize(function () {
            if (window.innerWidth < 800) {
                $('.header-navigation__menu').addClass('mobile')
                $('.header-navigation__menu').removeClass('desktop')
                $('.fa-chevron-down').addClass('text-dark')
                $('.fa-chevron-down').removeClass('text-white')

            } else {
                $('.header-navigation__menu').removeClass('mobile')
                $('.header-navigation__menu').addClass('desktop')
                $('.fa-chevron-down').removeClass('text-dark')
                $('.fa-chevron-down').addClass('text-white')

            }




        })
    })