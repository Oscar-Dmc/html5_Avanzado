$(document).ready(function(){// Nuevo waypoint
  var waypoint = new Waypoint({
    // Elemento objetivo
    element: document.getElementById('tres'),
    // Función disparada
    handler: mensaje()/*function(direction) {
      notify('¡Has llegado!')
    }*/
  });
  function mensaje() {

    // error, success, info, warning
    toastr.info('¡Has llegado');

    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      timeOut: 2000,
    }
  }

});
