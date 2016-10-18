
  function mensaje() {

    // error, success, info, warning
    toastr.info('Aquí el mensaje de texto. || \nHola mundo esto es en otro parrafo', 'Título de notificación');

    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      timeOut: 2000,
    }
  }
