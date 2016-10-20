$(document).ready(function(){

  var data = {
    labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    series: [{data: [2, 4, 6, 8, 10, 12]},
             {data: [1, 2, 3, 4, 5, 6]},
             {data: [12, 10, 8, 6, 4, 2]}
          ]
        };
  var options = {}

  new Chartist.Bar('.chart', data, options);
});
