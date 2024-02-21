var swiper = new Swiper('#slide3', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper2 = new Swiper('#slide4', {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

AOS.init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};