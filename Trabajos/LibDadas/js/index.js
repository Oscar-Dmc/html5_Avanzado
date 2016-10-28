$(document).ready(function(){
  //Iniciamos la libreria impress
  impress().init();

  //Libreria flip.
  $('#card').flip({
    axis: 'y',                // 'x' para giro en eje X
    trigger: 'click',        // 'hover': giro sobre tarjeta
    speed: 500,                // Velocidad del giro
  });

  //libreria before-after
  $('.ba-slider').beforeAfter();
});
