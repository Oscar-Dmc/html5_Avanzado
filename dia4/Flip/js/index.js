$(document).ready(function(){
  $('#card').flip({
    axis: 'xy',                // 'x' para giro en eje X
    trigger: 'click',        // 'hover': giro sobre tarjeta
    speed: 500,                // Velocidad del giro
  });
});
