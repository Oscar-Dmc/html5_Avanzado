$(document).ready(function(){
  $('#input-tags').selectize({
    plugins:['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
      return {
        value: input,
        text: input
      }
    }
  });
});
