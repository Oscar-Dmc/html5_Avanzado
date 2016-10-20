$(document).ready(function(){
  var sample = 'A->B: Mensaje';
  var sample1 = 'Title: Esto es un título';
  var sample2 = 'B-->C: Línea a rayas';
  var sample3 = 'C->>D: Línea con flecha hueca';
  var sample4 = 'D-->>E: Línea a rayas con flecha hueca';
  var sample5 = 'A->C: Uno \n B->C: Dos';
  var sampleTotal = 'A->B: Mensaje \n B-->C: Línea a rayas \n D-->>E: Línea a rayas con flecha hueca \n A->C: Uno \n B->C: Dos'

  var diagram = Diagram.parse(sampleTotal);

  diagram.drawSVG('diagram', {
      theme: 'hand'    // o 'simple'
  });

});
