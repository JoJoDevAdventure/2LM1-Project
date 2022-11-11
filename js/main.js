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
    lazyLoading: true,
  
    
    navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left",
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: (".popular__container .swiper-custom-pagination"),
      clickable: true,
      renderBullet: function(index, className) {
        return `<div class=${className}>
        <span class="number">${index + 1}</span>
        <span class="line"></span>
        </div>`
      }
    }
});

var swiper2 = new Swiper(".destinations", {
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  lazyLoading: true,
  

  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: (".destinations .swiper-custom-pagination"),
    clickable: true,
    renderBullet: function(index, className) {
      return `<div class=${className}>
      <span class="number">${index + 1}</span>
      <span class="line"></span>
      </div>`
    }
  }

});

