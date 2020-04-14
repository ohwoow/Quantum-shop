const dropdown = document.querySelector('.header__search-dropdown'),
      selectDropdown = document.querySelector('.header-select__dropdown'),
      footerDropdown = document.querySelector('.footer__nav-link--dropdown'),
      footerNavDropdown = document.querySelector('.footer__nav-dropdown'),
      menuBtn = document.querySelector('.toggle-btn'),
      headerNavSelect = document.querySelector('.header__nav-select'),
      headerNavDropdown = document.querySelector('.header__nav-dropdown');

    
menuBtn.addEventListener('click', function (event) {  
    event.preventDefault();
    menuBtn.classList.toggle('active');
    headerNavSelect.classList.toggle('active');
    headerNavDropdown.classList.toggle('active');
});


if (footerDropdown) {
    footerDropdown.addEventListener('click', function(event) {
        event.preventDefault();
        footerNavDropdown.classList.toggle('active');
    });
}


dropdown.addEventListener('click', function(event) {
    event.preventDefault();
    selectDropdown.classList.toggle('active');
    
});   

$(document).ready(function () {
    $('.slider__inner').slick({
        prevArrow: '<img src="assets/img/arrow-prev.svg" alt="left" class="slider-arrows slider-arrows--prev">',
       nextArrow: '<img src="assets/img/arrow-next.svg" alt="right" class="slider-arrows slider-arrows--next">',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});


