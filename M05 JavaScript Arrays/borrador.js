function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nuevoNum=[];
   nuevoNum[0]=num+2;
  console.log(nuevoNum[0]);
   for (var i=1; i<10; i++){
      if (i===5){
         nuevoNum[i]=nuevoNum[i-1];
         continue;
      } else {
         nuevoNum[i]=nuevoNum[i-1]+2;
      }
   }
   console.log (nuevoNum);
}

continueStatement(50);