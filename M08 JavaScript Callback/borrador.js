// function devuelvoUsuario() {
//     return 'CAMILO';
//  }
//  function devuelvoSaludo() {
//     return 'Hola';
//  }
//  function saludar(cb1, cb2) {
//     return cb1() + ' ' + cb2();
//  }
//  var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
//  console.log(resultado);

function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
   var letra= nombre[0].toUpperCase();
   var restopalabra = nombre.slice(1);
   return(letra+restopalabra);
  
 }


