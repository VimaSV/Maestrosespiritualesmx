//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
        document.getElementById("bn").classList.add("barra-progreso5");
        document.getElementById("lt").classList.add("barra-progreso6");
        document.getElementById("br").classList.add("barra-progreso7");
        document.getElementById("rp").classList.add("barra-progreso8");
        document.getElementById("rd").classList.add("barra-progreso9");
    }

}
const imagen = document.querySelector('.imagen-interactiva');

imagen.addEventListener('mouseover', () => {
  imagen.style.transform = 'scale(1.2) rotate(360deg)';
  imagen.style.filter = 'brightness(1.3) sepia(50%)';
});

imagen.addEventListener('mouseout', () => {
  imagen.style.transform = 'scale(1)';
  imagen.style.filter = 'none';
});

const imagenesInteractivas = document.querySelectorAll('.imagen-interactiva');

imagenesInteractivas.forEach(imagen => {
  imagen.addEventListener('click', () => {
    const numeroTelefono = "573192177933";
    const mensaje = "Buen dia, Deseo realizar mi primer consulta con un maestro";
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });
});


function abrirWhatsApp() {
  event.preventDefault();

  var numero = "573192177933"; // Reemplaza con el número de teléfono
  var mensaje = "Buen dia, quiero realizar mi primer consulta gratis";
  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

  // Intentar abrir WhatsApp
  window.open(link, '_blank');

  // Si WhatsApp no se abre, mostrar un mensaje
  
}

document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementsByClassName("close")[0];
  var claimBtn = document.getElementById("claimOffer");

  // Comprobar si es la primera visita
  if (!localStorage.getItem('popupShown')) {
    // Mostrar el popup después de 2 segundos
    setTimeout(function() {
      popup.style.display = "block";
    }, 2000);
    
    // Marcar que el popup ya se ha mostrado
    localStorage.setItem('popupShown', 'true');
  }

  // Cerrar el popup al hacer clic en la X
  closeBtn.onclick = function() {
    popup.style.display = "none";
  }

  // Cerrar el popup al hacer clic fuera de él
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }

  // Acción al reclamar la oferta
  claimBtn.onclick = function() {
    abrirWhatsApp();
  }
});

const whatsappButton = document.querySelector('.whatsapp-button');

whatsappButton.addEventListener('mouseover', () => {
  whatsappButton.style.transform = 'scale(1.1)';
});

whatsappButton.addEventListener('mouseout', () => {
  whatsappButton.style.transform = 'scale(1)';
});

function enviarATawk() {
  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector('input[placeholder="Nombre Completo *"]').value;
  const email = document.querySelector('input[placeholder="Dirección de Email"]').value;
  const celular = document.querySelector('input[placeholder="Celular de contacto"]').value;
  const tema = document.querySelector('input[placeholder="Tema..."]').value;
  const mensaje = document.querySelector('textarea[placeholder="Tu Mensaje..."]').value;

  // Construir el mensaje para Tawk.to
  const mensajeTawk = `Nuevo mensaje de contacto:
Nombre: ${nombre}
Email: ${email}
Celular: ${celular}
Tema: ${tema}
Mensaje: ${mensaje}`;

  // Verificar si Tawk_API está disponible
  if (typeof Tawk_API !== 'undefined') {
      // Establecer los atributos del visitante
      Tawk_API.setAttributes({
          name: nombre,
          email: email
      }, function(error) {
          if (!error) {
              // Si no hay error al establecer los atributos, enviar el mensaje
              Tawk_API.onLoad = function() {
                  Tawk_API.sendMessage(mensajeTawk);
              };
              alert('Mensaje enviado correctamente');
              // Limpiar el formulario
              document.getElementById('formularioContacto').reset();
          } else {
              console.error('Error al establecer atributos:', error);
              alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
          }
      });
  } else {
      console.error('Tawk_API no está definido');
      alert('No se pudo conectar con el servicio de chat. Por favor, inténtalo más tarde.');
  }
}