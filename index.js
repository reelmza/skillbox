// Carousel function with @swiperjs.com
var swiper = new Swiper('.swiper-container', {
    init: true,
    loop: true,
    autoplay: {
        delay: 14000,
        disableOnInteraction: true
    },


    speed: 700,
    spaceBetween: 200,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    }
})
var swiper = document.querySelector('.swiper-container').swiper

// Mobile nav-bar functions
const navbutton = document.getElementById('mobile-nav-icon')
const mobileNav = document.getElementsByClassName('mobile-navbar')[0]
let mobileNavState = 0

navbutton.addEventListener('click', () => {
    console.log("clicked")

    if (mobileNavState == 0) {
        mobileNav.classList.remove('hidden')
        return mobileNavState = 1
    }

    if (mobileNavState == 1) {
        mobileNav.classList.add('hidden')
        return mobileNavState = 0
    }
}) 
