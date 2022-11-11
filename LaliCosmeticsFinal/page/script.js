alert("Hola, preparate para mejorar la calidad de tu piel");
let agua = prompt("Ingrese en ml la cantidad de agua que consume por día");
let peso = prompt("Ingrese su peso en kg");


function calcular(agua, peso) {
  let resultado = (agua * peso);
  if (agua > 2000) {
    alert("¡Cuidado - parece que necesitas beber más agua de lo que pensabas para mantener la salud de tu piel!")
  } else {
    alert("Tomas suficiente agua, lo cual es crucial para una piel bonita");
  }
  return console.log(resultado);
}

calcular(agua, peso)




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



