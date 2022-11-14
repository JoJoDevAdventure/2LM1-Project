function scrollHeader(){
    const header= document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll
    if (this.scrollY>= 50) header.classList.add('scroll-header'); else header.classList.remove

}
window.addEventListener('scroll', scrollHeader)

//SWIPER POPULAR
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
