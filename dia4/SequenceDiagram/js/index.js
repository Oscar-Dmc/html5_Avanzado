$(document).ready(function(){
  var sample = 'A->B: Mensaje';
  var sample1 = 'Title: Esto es un título';
  var sample2 = 'B-->C: Línea a rayas';
  var sample3 = 'C->>D: Línea con flecha hueca';
  var sample4 = 'D-->>E: Línea a rayas con flecha hueca';
  var sample5 = 'A->C: Uno \n B->C: Dos';

  var diagram = Diagram.parse(sample, sample1, sample2, sample3, sample4, sample5);

  diagram.drawSVG('diagram', {
      theme: 'hand'    // o 'simple'
  });

});
