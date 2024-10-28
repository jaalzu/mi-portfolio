let menu = document.getElementById('nav-menu');
let navList = document.getElementById('nav-list');

menu.addEventListener('click',() => {
    navList.classList.toggle('show-menu');
})




const copyToClipboard = element => {
    const textToCopy = element.innerHTML;

    const el = document.createElement("textarea");
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    const tooltip = document.getElementById('tooltip');
    tooltip.innerText = '¡Copiado!';
    setTimeout(() => {
        tooltip.innerText = 'Haz click para copiar'; // Volver al texto original después de un tiempo
    }, 2000);
}

function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
}

function resetTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}





const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado exitosamente.',
          confirmButtonColor: '#00D8F5',
          timer:3000,
          timerProgressBar:true,
           confirmButtonText: 'Cerrar',
          customClass:{
            popup:'custom-popup', // clase ubicada en typography.
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar el formulario, por favor inténtalo nuevamente.',
        });
      }
    });
  });

