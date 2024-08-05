const swiper = new Swiper(".swiper2", {
    // Optional parameters
    autoplay: {
        delay: 5000,
    },
    direction: "horizontal",
    speed: 400,
    loop: false,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        750: {
            slidesPerView: 2,
        },
        999: {
            slidesPerView: 3,
        },
    },
});