
  var medias=[
    {img:'/assest/img4.jpg',desc:'Nazirliyin təşəbbüsü ilə kibertəhlükəsizliyə dair onlayn tədbir keçirilir',id:'1'},
    {img:'/assest/img5.jpg',desc:'Təhlükəsiz İnternet Günü ilə bağlı vebinar keçirilib',id:'2'},
    {img:'/assest/img6.jpg',desc:' Beynəlxalq Təhlükəsiz İnternet Günü ilə əlaqədar vebinar keçiriləcək',id:'3'},
    {img:'/assest/img7.jpg',desc:'28 yanvar Məlumatların Mühafizəsi Günüdür',id:'4'},
    
]
var advices=[
    {img:'/assest/img8.jpg',desc:'"Facebook" hesabının bloklanmasının qarşısını almaq üçün nələrə diqqət etməliyik?',id:'5'},
    {img:'/assest/img9.jpg',desc:'IP kameralarımızı kiberhücumlardan necə qoruyaq?',id:'6'},
    {img:'/assest/img1.jpg',desc:'Sosial mühəndislik hücum texnikası nədir?!',id:'7'},

    {img:'/assest/img3.jpg',desc:'Fişinq-kiberdələduzluq texnikası',id:'8'},
]

 var cards=[
     {img:'/assest/img4.jpg',desc:'Diqqət! Bankları hədəfə alan "fişinq" hücumları barədə xəbərdarlıq!',id:'1'},
     {img:'/assest/img5.jpg',desc:'Xəbərdarlıq: Microsoft Exchange Server məhsullarında təhlükəsizlik boşluqları aşkar edilib!',id:'2'},
     {img:'/assest/img6.jpg',desc:' Kiberdələduzlar “Azərpoçt” MMC-nin adına saxta saytlar yaradaraq insanları “tələ”yə salmağa çalışır',id:'3'},
     {img:'/assest/img7.jpg',desc:'Xəbərdarlıq: Nəqliyyat, Rabitə və Yüksək Texnologiyalar Nazirliyi adından saxta xəbərlər yayılır',id:'4'},
     {img:'/assest/img8.jpg',desc:'Kiberdələduzlar koronavirus mövzusundan sui-istifadə etməyə davam edir',id:'5'},
     {img:'/assest/img9.jpg',desc:'Xəbərdarlıq: Düşmən əks-təbliğat aparmaq məqsədilə məlumat əldə etməyə çalışır',id:'6'},
     {img:'/assest/img1.jpg',desc:'Xəbərdarlıq: “WhatsApp” üzərindən müəllim və tələbələri hədəf alan “fişinq” kampaniyaları həyata keçirilir',id:'7'},

     {img:'/assest/img3.jpg',desc:'Xəbərdarlıq: “WhatsApp” üzərindən həyata keçirilən daha bir “fişinq” kampaniyası qeydə alınıb',id:'8'},
 ]
$(document).ready(function () {
   


    /**
     * @Note set query to localstorage
     */
    $('.find').click(function(){
        localStorage.setItem('query',$('.search-input').val()); 
        $(location).attr('href','http://127.0.0.1:5500/'+'search.html');
       
    })

    $('.find-mobile').click(function(){
        localStorage.setItem('query',$('.search-input-mobile').val()); 
        $(location).attr('href','search.html');    
     })
    /**
     * @Note filter
     */
    if(localStorage.getItem('query')){
        // var q=localStorage.getItem('query');
        // $(cards).each(function(i,v){
        //     if(v.desc.toLowerCase().includes(q.toLowerCase())){
        //         searchResults=v;
        //     }
        // });

        let currentCard= cards.filter(function(card){
            return card.desc.toLowerCase().includes(localStorage.getItem('query').toLowerCase());
            
        })  
        let currentAdvice= advices.filter(function(advice){
            return advice.desc.toLowerCase().includes(localStorage.getItem('query').toLowerCase());
        }) 
        let currentMedia= medias.filter(function(media){
            return media.desc.toLowerCase().includes(localStorage.getItem('query').toLowerCase());
        }) 

        console.log(currentMedia);

  
        

        if(currentCard.length>0 || currentAdvice.length>0 || currentMedia>0){

            currentCard.forEach(function(current){
                $('.filteredCard').append(`
                <div class="col-lg-6 ml-md-2 ml-0 col-sm-6 px-0 my-4 main-cards__card p-0 ">
                       
                <div class="">
                    <img src="${current.img}" class="img-fluid main-cards__card--image" alt="">
                </div>
                <div class="main-cards__card--description p-4">
                    <p class="main-cards__card--title">
                       ${current.desc}
                    </p>
                </div>
           
        </div>
                `)
        })
            
        currentAdvice.forEach(function(advice){
                $('.filteredAdvice').append(`
                <div class="media-items__item mb-4 row col-md-6 px-0 justify-content-between">
                <div class=" media-items__image--container col-md-6">
                    <img src="${advice.img}" alt="" class="img-fluid media-items__item--image ">
                </div>
                <div class="media-items__item--description py-1 px-md-3  col-md-6  ">
                    <p class="media-items__item--title">${advice.desc}</p>
                    <a href="#" class="main-notifications__link more">Daha çox <i
                            class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
                `)
            })

            currentMedia.forEach(function(media){
                $('.filteredAdvice').append(`
                <div class="media-items__item mb-4 row col-md-6 px-0  justify-content-between">
                <div class=" media-items__image--container col-md-6">
                    <img src="${media.img}" alt="" class="img-fluid media-items__item--image ">
                </div>
                <div class="media-items__item--description py-1 px-md-3  col-md-6  ">
                    <p class="media-items__item--title">${media.desc}</p>
                    <a href="#" class="main-notifications__link more">Daha çox <i
                            class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
                `)
            })
        }
        

        
        else{
            $('.filteredCard').append('<h1 class="text-dark text-center">Axtarış nəticəsi tapılmadı!</h1>')
        }
    }

        


    cards.forEach(function(card){
        $('.main-cards').append(`
        
                <div class="col-lg-3 col-sm-6 my-4 main-cards__card p-0 ">
                    
                <div class="">
                    <img src="${card.img}" class="img-fluid main-cards__card--image" alt="">
                </div>
                <div class="main-cards__card--description p-4">
                    <p class="main-cards__card--title">
                    ${card.desc}
                    </p>
                </div>
        
            </div>
       `)
    })
      

    $(".main-cards__card").each(function(index,card){
        $(card).click(function(e){
           
            history.pushState({}, null, 'detail.html');
            $('.main').html(` <div class="services  mb-5 ">
            <div class="services-container d-flex justify-content-between w-100 mt-2 mb-5">
                <h2 class="services-container__title text-dark">
                    <i class="fab fa-ups"></i> Details
                </h2>
                <div>
                    <p class="text-dark mt-2 services-container__adres"><a href="/index.html">Ana səhifə   </a>>  Details</p>
                </div>
            </div>
    
            <div class="detail ">
                <div class="detail-image mt-5 mb-4 "><img src="${$(card).find('.main-cards__card--image').attr('src')}" class="img-fluid " alt=""></div>
                <div class="detail-description text-dark"><p class="">${$(card).find('.main-cards__card--title').html()}</p></div>
            </div>
        </div>`)
        $(window).scrollTop(0)
            // e.preventDefault()
            // $(location).attr('href','http://127.0.0.1:5500/'+'detail.html');
            // console.log(`${$(card).find('.main-cards__card--image').attr('src')}`);
            
            // $('.detail-image').attr('src',`${$(card).find('.main-cards__card--image').attr('src')}`)
        })
    })


    medias.forEach(function(media){
        $('.isMedia').append(`
        
        <div class="media-items__item mb-4 row justify-content-between">
        <div class="col-lg-6  media-items__image--container">
            <img src="${media.img}" alt="" class="img-fluid media-items__item--image ">
        </div>
        <div class="media-items__item--description p-3  col-lg-6">
            <p class="media-items__item--title">${media.desc}</p>
            <a href="#" class="main-notifications__link more">Daha çox <i
                    class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </div>
        `)
    })
    advices.forEach(function(advice){
        $('.advice-items').append(`
        
        <div class="media-items__item mb-4 row justify-content-between">
        <div class="col-lg-6  media-items__image--container">
            <img src="${advice.img}" alt="" class="img-fluid media-items__item--image ">
        </div>
        <div class="media-items__item--description p-3 col-lg-6">
            <p class="media-items__item--title">${advice.desc}</p>
            <a href="#" class="main-notifications__link more">Daha çox <i
                    class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </div>
        `)
    })

    
    $(".media-items__item .more").each(function(index,item){
        $(item).click(function(e){
        
           
            history.pushState({}, null, 'detail.html');
            $('.main').html(` <div class="services  ">
            <div class="services-container d-flex justify-content-between w-100 mt-2 mb-5">
                <h2 class="services-container__title text-dark">
                    <i class="fab fa-ups"></i> Details
                </h2>
                <div>
                    <p class="text-dark mt-2 services-container__adres"><a href="/index.html">Ana səhifə   </a>>  Details</p>
                </div>
            </div>
    
            <div class="detail my-5 ">
                <div class="detail-image mt-5 mb-4 "><img src="${$(item).parent().parent().find('.media-items__item--image').attr('src')}" class="img-fluid " alt=""></div>
                <div class="detail-description text-dark"><p class="">${$(item).parent().parent().find('.media-items__item--title').html()}</p></div>
            </div>
        </div>`)
        $(window).scrollTop(0)
            // e.preventDefault()
            // $(location).attr('href','http://127.0.0.1:5500/'+'detail.html');
            // console.log(`${$(card).find('.main-cards__card--image').attr('src')}`);
            
            // $('.detail-image').attr('src',`${$(card).find('.main-cards__card--image').attr('src')}`)
        })
    })



    

    $(window).scroll(function () {
        if (window.pageYOffset > 200) {
            $('.header-navigation').addClass('sticky')
        } else {
            $('.header-navigation').removeClass('sticky')
        }
    })

    $(' .search-mobile ').click(function () {
        $('.header-mobile__search ').slideDown('fast')
        $('.backdrop').slideDown('fast')

    })
    $('.backdrop').click(function () {
        $('.header-mobile__search ').slideUp('fast')
        $('.backdrop').slideUp('fast')
    })

    $('.flag-name,.lang-icon').click(function () {
        $('.langs').fadeToggle('slow', function () {

        })
    })

    $('.fa-bars').click(function () {
        $('.header-navigation__menu').addClass('showMenu')
    })
    $('.fa-times').click(function () {
        $('.header-navigation__menu').removeClass('showMenu')
    })

    $('.fa-chevron-down').click(function () {
        $('.fa-chevron-down').not($(this)).parent().find('.header-navigation__submenu').slideUp('fast')
        $(this).parent().find('.header-navigation__submenu').slideToggle('fast')


    })

    $('.header-navigation__menu--item').not(":nth-of-type(7)").click(function () {
        $('.header-navigation__menu--item').removeClass('active')
        $(this).addClass('active')

    })


    $('.fa-chevron-up').click(function () {
        $(window).scrollTop(0)
    })





    // Carosel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        // nav:true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    // SWIPER
    
    new Swiper(".swiper1", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay:true
    });
    
    new Swiper(".swiper2", {
        direction: "vertical",
        autoplay: true,
        slidesPerView: 2.5,
        spaceBetween: 20,
        // centeredSlides: true,
        // pagination: {
        //   el: ".swiper-pagination2",
        //   clickable: true,
        // },
    });

     // Contact form




     $('.services-content__modal--group__input').on('input', function () {
        if ($(this).val() != '') {
            $(this).addClass('active')
        }

        // if ($(this).val()!=='' && $('.email').val().includes('@')) {
        //     $('.services-content__modal--action__submit').removeClass('disabled')
        //     console.log('silindi');
        // } else  {
        //     $('.services-content__modal--action__submit').addClass('disabled')

        //     console.log('elave olundu');
        // }

    })


    $('.services-content__modal--group__input').focusout(function () {
        //  if($(this).val() ==='' ||  !$('.email').val().includes('@')) {
        // $('.services-content__modal--action__submit').addClass('disabled')
        //     console.log('elave olundu');
        // }
        // else  {
        //     $('.services-content__modal--action__submit').removeClass('disabled')
        // console.log('silindi');
        // } 

        if ($(this).val() === '') {
            $(this).removeClass('active');
            $(this).addClass('invalid')
            $(this).parent(".services-content__modal--group").find('.services-content__modal--group__error').addClass('show')

        }
        else if (!$(this).parent(".services-content__modal--group").find('.email').val().includes('@')) {
            $(this).addClass('invalid')
            $('.incorrect-email').css('display', 'block')

        }

        

        // if (($(this).parent(".services-content__modal--group").find('.phone').val().length != 13 ||
        //     $(this).parent(".services-content__modal--group").find('.phone').val().length != 12 ||
        //     $(this).parent(".services-content__modal--group").find('.phone').val().length != 10) &&
        //     ($(this).parent(".services-content__modal--group").find('.phone').val().length > 0)) {

        //     $(this).addClass('invalid')
        //     $('.incorrect-phone').css('display', 'block')
        // }

    })

    



    $('.services-content__modal--group__input').focus(function () {
        $(this).removeClass('invalid')
        $(this).parent(".services-content__modal--group").find('.services-content__modal--group__error').removeClass('show')
        $(this).parent(".services-content__modal--group").find('.incorrect-email').css('display', 'none')
        $(this).parent(".services-content__modal--group").find('.incorrect-phone').css('display', 'none')
    })


    $('.link').click(function(){
        $('.backdrop').slideToggle('fast')
        $('.modal-2').fadeToggle('fast')
    })

    $('.backdrop').click(function(){
        $('.modal-2').fadeOut('fast')
        $('.services-content__modal--group__input').removeClass('invalid')
        $(".services-content__modal--group").find('.services-content__modal--group__error').removeClass('show')
        $(".services-content__modal--group").find('.incorrect-email').css('display', 'none')
        $(".services-content__modal--group").find('.incorrect-phone').css('display', 'none')
        $('.services-content__modal--group__input').val('');
        $('.services-content__modal--group__input').removeClass('active');
    })

    $('.services-content__social').click(function () {
        $('.services-content__container').not($(this).parent('.row').find('.services-content__container')).slideUp('fast')

        $(this).parent('.row').find('.services-content__container').slideToggle('fast')

        $('.services-content__social').not($(this)).addClass('col-md-12')
        if ($(this).hasClass('col-md-12')) {
            $(this).addClass('col-md-4')
            $(this).removeClass('col-md-12')
        } else {
            $(this).removeClass('col-md-4')
            $(this).addClass('col-md-12')
        }
    })

    $('.card-title').click(function(){
        $('.support-card__number').slideToggle('normal')
    })

    $('.select-lang').click(function(){
        $('.flag-name').html($(this).html())
        $('.langs').hide()
        if($('.flag-name').html()==='AZ'){
            $('.flag').attr('src','/assest/azerbaijan.png')
        }else{
            $('.flag').attr('src','/assest/united-kingdom.png')
        }
    })

})
