// scripts.js
const myCarousel = document.querySelector('#carouselExample');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Change slide every 2.5 seconds
  ride: 'carousel'
});

document.addEventListener('DOMContentLoaded', function(){
var options = {
    strings: ["Creativity", "Professionalism", "Photographer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
};

var typed = new Typed('.typed', options);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "/WEBSITE FILES/2023_26 Sept_Passion Jewelry_Look 2- 571.jpg",
      "/WEBSITE FILES/BTS Adrian Khalif X JL - 884.jpg",
      "/WEBSITE FILES/2024_21 Jan_The Uplifters52452 (1).jpg",
      "/WEBSITE FILES/3D Cincin_1_W Snow.jpg",
      "/WEBSITE FILES/C2BA8BFF-0CD6-4FA0-9CCB-7B980A7253E1.JPG",
      "/WEBSITE FILES/CNY RAW_207.jpg",
      "/WEBSITE FILES/DnC_304.jpg",
      "/WEBSITE FILES/DnC_48.jpg",
      "/WEBSITE FILES/DSC00204.jpg",
      "/WEBSITE FILES/DSC00869.jpg",
      "/WEBSITE FILES/DSC00922.jpg",
      "/WEBSITE FILES/DSC05776.jpg",
      "/WEBSITE FILES/DSC07013.jpg",
      "/WEBSITE FILES/DSC07275.jpg",
      "/WEBSITE FILES/DSC07435.jpg",
      "/WEBSITE FILES/DSC07770.jpg",
      "/WEBSITE FILES/DSC07843.jpg",
      "/WEBSITE FILES/DSC07843.jpg",
      "/WEBSITE FILES/DSC07947.jpg",
      "/WEBSITE FILES/Outdoor Pillar - 24.jpg",
      "/WEBSITE FILES/Passion Anniv Catalogue - 111.jpg",
      "/WEBSITE FILES/Passion Anniv Catalogue - 193 (1).jpg"
    ];
  
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  });