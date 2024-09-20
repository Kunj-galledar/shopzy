var bannerSlider = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

var categorySlider = new Swiper(".category-slider", {
    slidesPerView: 5,
    spaceBetween: 14,
});

// Continue horizontal slide
var swiperOptions = {
    loop: true,
    autoplay: {
        delay: 3,
        disableOnInteraction: false
    },
    slidesPerView: 4.2,
    speed: 2500,
    spaceBetween: 18,
    rewind: true,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        0: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 2.6,
            spaceBetween: 15,
        },
        // 1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        // },
    },
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// Product Main Slider
var productSlider = new Swiper(".product-slider", {
    // freeMode: true,
    spaceBetween: 18,
    pagination: {
        el: ".swiper-pagination",
    },
});


// Vertical Slider Js
// var swiperOptions = {
//     loop: true,
//     autoplay: {
//         delay: 3,
//         disableOnInteraction: false
//     },
//     slidesPerView: 4,
//     speed: 2500,
//     direction: getDirection(),
//     grabCursor: true,
//     mousewheelControl: true,
//     keyboardControl: true,
//     on: {
//         resize: function () {
//             swiper.changeDirection(getDirection());
//         },
//     },
//     // navigation: {
//     //     nextEl: ".swiper-button-next",
//     //     prevEl: ".swiper-button-prev"
//     // }
// };

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
//     return direction;
// }

// var swiper = new Swiper(".vertical-slider", swiperOptions);