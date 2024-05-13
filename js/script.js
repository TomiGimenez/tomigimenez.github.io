// Carrusel de proyectos
$(document).ready(function(){
    $('.portfolio-carousel').slick({
        dots: true, // Muestra los puntos de navegación
        arrows: true, // Muestra las flechas de navegación
        prevArrow: $('.prev'), // Elemento para la flecha izquierda
        nextArrow: $('.next'), // Elemento para la flecha derecha
        infinite: true, // desplazamiento infinito
        slidesToShow: 3, // Muestra 3 proyectos a la vez
        slidesToScroll: 1, // Desplaza 1 proyecto a la vez
        autoplay: true, // Reproducción automática
        autoplaySpeed: 5000, // Velocidad de reproducción (5 segundos)
        responsive: [
            {
                breakpoint: 768, // Cambios en la configuración en pantallas pequeñas
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
    alert("Gracias por contactarme, te escribiré pronto!");
  }
}