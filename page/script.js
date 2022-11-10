const titulo = document.getElementById('t1');

// alternar elt tiulo entre Equipo Lali Cosmetics y Tu Cosmetica en casa
setInterval(() => {
  console.log('cambio');
  setTimeout(() => {
    titulo.innerHTML = 'Equipo Lali Cosmetics';
  }, 2000);
  setTimeout(() => {
    titulo.innerHTML = 'Tu Cosmetica en casa';
  }, 1000);
}, 3000);



