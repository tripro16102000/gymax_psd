$(document).ready(function(){
    //Scroll black header
    $(this).scroll(function(){
        if(scrollY>0){
            $('.site-header').addClass('sticky');
        }
        else{
            $('.site-header').removeClass('sticky');
        }
    })
    $('.product-content-item').hide();
    $('.product-content-item:first-child').fadeIn()
    $('.product-tabs li').click(function(){
        //Active nav tabs
        $('.product-tabs li').removeClass('active');
        $(this).addClass('active');
        //Show tab-content item
        let id_tab_content = $(this).children('a').attr('href');
        $('.product-content-item').hide();
       $(id_tab_content).fadeIn()

        return false;
    })
    // Product item checked 
    $('.item-check').click(function(){
        $(this).toggleClass('checked');
        return false;
    })
    // Responsive navbar
    $('.header-bar i').click(function(){
        $('.header-navbar').addClass('baractive')
        $('.header-tool').addClass('baractive')
    
    })
    $('.close-nav').click(function(){
        $('.header-navbar').removeClass('baractive');
        $('.header-tool').removeClass('baractive')

    })
})
//carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });