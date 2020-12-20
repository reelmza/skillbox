const bigContainer = document.getElementById('big-container')
const loadScreen = document.getElementById('load-screen')
const loadText = document.getElementById('load-text')

setTimeout(() => {
    loadText.textContent = "Getting Projects..."
}, 1500);

setTimeout(() => {

    loadScreen.classList.add('hide')
    bigContainer.classList.remove('hide')
}, 3000);

// Mobile nav-bar functions
const navbutton = document.getElementsByClassName('mobile-nav-icon')[0]
const mobileNav = document.getElementsByClassName('mobile-navbar')[0]
const navIconChild = document.getElementsByClassName('nav-icon-child')[0]
const don = document.getElementsByClassName('don')


// Declare mobile-navigation at start
let mobileNavState = 0

navbutton.addEventListener('click', () => {
    console.log("clicked")

    if (mobileNavState == 0) {
        for (let i = 0; i < don.length; i++) {
            don[i].classList.add('disabled')
        }

        mobileNav.classList.remove('hide')

        navIconChild.classList.remove('fa-bars')
        navIconChild.classList.add('fa-times')
        return mobileNavState = 1
    }

    if (mobileNavState == 1) {
        for (let i = 0; i < don.length; i++) {
            don[i].classList.remove('disabled')
        }

        navIconChild.classList.remove('fa-times')
        navIconChild.classList.add('fa-bars')

        mobileNav.classList.add("hide")
        return mobileNavState = 0

    }
})

// Carousel function with @swiperjs.com
var swiper = new Swiper('.swiper-container', {
    init: true,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: true
    },


    speed: 500,
    spaceBetween: 100,

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
