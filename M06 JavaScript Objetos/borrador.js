// HAS OWN PROPERTY

var libro = { 
    autor:'Borges', 
    genero: 'fantasia', 
    año: 1999, 
    info: function() {console.log("Mi libro trata de :"+ this.genero) }
};

var tienePropiedad=libro.hasOwnProperty('genero');
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

for( var prop in libro){
    console.log("Esta es la propiedad : "+ prop );
    console.log("Este es el valor de la propiedad : "+ libro[prop]);
}

var todasLasPropiedades = Object.keys(libro);
libro.info();