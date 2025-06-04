// Estamos en el lado del servvidor, no del cliente
const fs = require('fs'); // importamos el m�dulo de sistema de archivos
console.log('Primero');
fs.readFile(
    './a.txt', // archivo a leer
    'utf-8', // codificaci�n del archivo
    (errrorLectura, contenido) => { // callback que se ejecuta cuando se completa la lectura
        if (errrorLectura) {
            console.error('ERROR lectura 1');
        }else {
            console.log('TERCERO'); // mostramos el contenido del archivo
        }
    }    

)

fs.writeFile(
    './a.txt', // archivo a escribir
    'Hola !' + new Date().toString(), // contenido del archivo
    (errorEscritura) => { // callback que se ejecuta cuando se completa la escritura
        if (errorEscritura) {
            console.error('ERROR escritura');
        } else {
            console.log('Archivo escrito correctamente'); // mostramos un mensaje en consola
        }
    }
);

console.log('Segundo'); // mostramos un mensaje en consola
// El c�digo se ejecuta de forma as�ncrona, por lo que el orden de ejecuci�n no es el esperado
