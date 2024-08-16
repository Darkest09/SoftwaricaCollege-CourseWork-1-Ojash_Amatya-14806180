document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
    });
  
    // Initialize Owl Carousel
    const slider = function() {
      const carousel = document.querySelector('.nonloop-block-3');
      if (carousel) {
        $(carousel).owlCarousel({
          center: false,
          items: 1,
          loop: true,
          smartSpeed: 700,
          stagePadding: 15,
          margin: 20,
          autoplay: true,
          nav: true
        });
      }
    };
  
    slider();
  });
  