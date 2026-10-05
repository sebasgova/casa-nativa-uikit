// animación 1: al cargar la página entran el logo los enlaces y el botón
anime.timeline({ easing: 'easeOutQuad' })
  .add({ 
    targets: 'header .uk-logo', 
    opacity: [0, 1], 
    translateY: [-25, 0], 
    duration: 800 
  })
  .add({
    targets: ['.uk-navbar-nav li', '.uk-navbar-right .uk-button'],
    opacity: [0, 1],
    translateY: [-25, 0],
    delay: anime.stagger(120),
    duration: 600
  }, '-=200');

  // Animación 2: al abrir el menú móvil, los enlaces entran uno a uno
UIkit.util.on('#menu-movil', 'show', function () {
  anime({
    targets: '#menu-movil li',
    opacity: [0, 1],
    translateX: [-20, 0],
    delay: anime.stagger(70),
    duration: 400,
    easing: 'easeOutQuad'
  });
});

// Cierra el menú móvil al elegir un enlace
document.querySelectorAll('#menu-movil a').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    UIkit.offcanvas('#menu-movil').hide();
  });
});