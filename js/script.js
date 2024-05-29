// Carrusel de proyectos
$(document).ready(function(){
    $('.portfolio-carousel').slick({
        dots: true, // Muestra los puntos de navegación
        arrows: true, // Muestra las flechas de navegación
        prevArrow: $('.prev'), // Elemento para la flecha izquierda
        nextArrow: $('.next'), // Elemento para la flecha derecha
        infinite: true, // desplazamiento infinito
        slidesToShow: 2, // Muestra 2 proyectos a la vez
        slidesToScroll: 1, // Desplaza 1 proyecto a la vez
        autoplay: false, // Reproducción automática
        autoplaySpeed: 5000, // Velocidad de reproducción (5 segundos)
        responsive: [
            {
                breakpoint: 980, // Cambios en la configuración en pantallas pequeñas
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Todos los campos son obligatorios.',
    });
    return;
  }

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': "application/json",
    },
  })
  if (response.ok) {
    this.reset();
    Swal.fire({
      icon: 'success',
      title: '¡Enviado!',
      text: 'Gracias por contactarme, te escribiré pronto!',
    });
  }
}