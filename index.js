// Carousel function with @swiperjs.com
var swiper = new Swiper('.swiper-container', {
    init: true,
    loop: true,
    autoplay: {
        delay: 14000,
        disableOnInteraction: true
    },


    speed: 700,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: "span"
    }
})
var swiper = document.querySelector('.swiper-container').swiper
console.log(swiper.pagination)
