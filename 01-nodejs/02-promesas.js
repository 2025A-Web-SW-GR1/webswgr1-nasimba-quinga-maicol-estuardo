const fs = require('fs'); // importamos el módulo de sistema de archivos

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise(
        (resolve, reject) => { // creamos una nueva promesa
            if (numero % 2 === 0) { // si el número es par
                resolve(numero); // resolvemos la promesa
            } else {
                reject('El número no es par'); // rechazamos la promesa
            }
        }
    );
    return miPrimeraPromesa; // devolvemos la promesa creada
}

function promesaElevarAlCuadrado(nuemro){
    return new Promise(res=>res(nuemro * nuemro)); // devolvemos una nueva promesa que eleva al cuadrado el número
}

promesaEsPar(4) //async
    .then(
        (respuestaEsPar) => { // si la promesa se resuelve
            console.log('Es par'), respuestaEsPar; // mostramos el número par
            return promesaElevarAlCuadrado(respuestaEsPar); // devolvemos una nueva promesa que eleva al cuadrado el número
        }
    )
    .then( // try
        (respuestaElevarAlCuadrado) => { // si la promesa se resuelve
            console.log('El cuadrado es:', respuestaElevarAlCuadrado); // mostramos el número elevado al cuadrado
        }
    )
    .catch( // catch
        (respuestaError) => { // si la promesa se rechaza
            console.log('NO ES PAR', respuestaError); // mostramos el error
        }
    )

    function leerArchivoPromesa(archivo) {
        return new Promise((resolve, reject) => { // creamos una nueva promesa
            fs.readFile(archivo, 'utf-8', (errorLectura, contenido) => { // leemos el archivo
                if (errorLectura) {
                    reject('ERROR lectura 2');
                } else {
                    resolve(contenido);
                }
            });
        });
    }

    leerArchivoPromesa('./a.txt') // llamamos a la función que lee el archivo
        .then(
            (contenidoArchivo) => { // si la promesa se resuelve
                console.log('Contenido del archivo:', contenidoArchivo); // mostramos el contenido del archivo
            }
        )
        .catch(
            (errorLectura) => { // si la promesa se rechaza
                console.error('ERROR: ', errorLectura); // mostramos el error
            }
        );


    // ASYNC AWAIT
    // REGLAS:
    // 1. Estamos dentro de una funcion nombrada, anonima o fat arrow
    // 2. Agregar la palabra async antes de la declaración de la función
    // 3. Agregar AWAIT dentro de un bloque TRY CATCH antes de la promesa
    async function correrLogicaPromesas(){
        try{
            const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
            console.log('1) Respuesta Archivo; ', respuestaLeerArchivo);
            const respuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
            console.log('2) Respuesta Archivo; ', respuestaLeerArchivo);
            await leerArchivoPromesa('./a2.txt');
        } catch (error){
            console.log('3)Error', error);
        }


    }