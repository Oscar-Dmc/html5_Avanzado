$(document).ready(function(){
  var sample = 'digraph g { a -> b; b -> a; b -> c; c -> c;}';

  var options = {
    format: 'svg',
    engine: 'circo'
    //format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;

});
