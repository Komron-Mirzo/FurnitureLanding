$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 45,
    autoplay: false,
    nav: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
    
      },
      600: {
     
        items: 2
      },
      1000: {
    
        items: 3
      }
    }
  });
});