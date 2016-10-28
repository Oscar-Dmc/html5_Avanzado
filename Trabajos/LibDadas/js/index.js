$(document).ready(function(){
  //Iniciamos la libreria impress
  impress().init();

  //Libreria flip.
  $('#card').flip({
    axis: 'y',                // 'x' para giro en eje X
    trigger: 'click',        // 'hover': giro sobre tarjeta
    speed: 500,                // Velocidad del giro
  });

  //Libreria before-after
  $('.ba-slider').beforeAfter();

  //Libreria slick
  $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2500,
  });
});
