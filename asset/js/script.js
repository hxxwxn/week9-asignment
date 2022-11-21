$(function(){
    $('.link-more').click(function(){
        $('.logo-area').addClass('active');
    });
    $('.mall-logo a').click(function(){
        $('.logo-area').removeClass('active');
    })



    const slide1 = new Swiper("#mainSlide", {
        // loop: true,
        // simulateTouch:false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        
        // pagination: {
        //     el: ".fraction",
        //     type: "custom",
        //     renderCustom: function (swiper, current, total) {
        //         return `<span class="page">${current}</span>/<span class="total">${total}</span>`;
        //     }
        // },
    });


    var swiper = new Swiper("#adSlide", {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        
      });

      var swiper = new Swiper("#promotionSlide", {
        spaceBetween: 10,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        
      });


      var swiper = new Swiper(".commonSlide", {
        spaceBetween: 10,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        
      });
      var swiper = new Swiper("#TVSlide", {
        spaceBetween: 15,
        centeredSlides: true,
        
      });
})