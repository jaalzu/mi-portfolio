
// menu responsive 

let menu = document.getElementById('nav-menu');
let navList = document.getElementById('nav-list');

menu.addEventListener('click',() => {
    navList.classList.toggle('show-menu');
})




// google analytics script 
  window.addEventListener('load', function() {
    // Carga de Google Analytics después de que la página esté completamente cargada
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WF4DKBP52Z";
    script.async = true;
    document.head.appendChild(script);

    // Configuración de Google Analytics
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WF4DKBP52Z');
    };
  });






// projects images change 
const proyectosContainers = document.querySelectorAll('.proyectos__img__responsive');

proyectosContainers.forEach(container => {
    const mainImage = container.querySelector('.main-image');
    const thumbnailContainers = container.querySelectorAll('.thumbnail-container');

    thumbnailContainers.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.querySelector('.img-thumbnail').src;

            
            thumbnailContainers.forEach(thumb => thumb.classList.remove('active'));

            thumbnail.classList.add('active');
        });
    });
});




// copy email in clipboard 

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






// swal fire in contact form 

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






// effect in contact card 

  const card = document.getElementById("card");

  card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      const angle = Math.atan2(-x, y);
      card.style.setProperty("--rotation", angle + "rad");
  });
  