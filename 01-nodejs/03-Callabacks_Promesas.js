const fs = require('fs'); // Importa el módulo de sistema de archivos de Node.js
const archivo = './a.txt'; // Nombre del archivo a leer y escribir
const fecha = new Date().toString(); // Fecha y hora actual en formato string

// --- CALLBACKS ---
// Función que lee el archivo y le agrega la fecha usando callbacks
function agregarFechaCallback() {
    fs.readFile(archivo, 'utf-8', (err, contenido) => { // Lee el archivo
        if (err) {
            console.error('Error leyendo (callback):', err); // Si hay error al leer, lo muestra
        } else {
            const nuevoContenido = contenido + '\n' + fecha; // Concatena el contenido actual con la fecha
            fs.writeFile(archivo, nuevoContenido, (errEscritura) => { // Escribe el nuevo contenido en el archivo
                if (errEscritura) {
                    console.error('Error escribiendo (callback):', errEscritura); // Si hay error al escribir, lo muestra
                } else {
                    console.log('Callback: Fecha agregada correctamente'); // Mensaje de éxito
                }
            });
        }
    });
}

// --- PROMESAS (THEN/CATCH) ---
// Función que lee el archivo y devuelve una promesa
function leerArchivoPromesa(archivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(archivo, 'utf-8', (err, contenido) => {
            if (err) reject(err); // Si hay error, rechaza la promesa
            else resolve(contenido); // Si no, resuelve con el contenido
        });
    });
}
// Función que escribe en el archivo y devuelve una promesa
function escribirArchivoPromesa(archivo, contenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(archivo, contenido, (err) => {
            if (err) reject(err); // Si hay error, rechaza la promesa
            else resolve(); // Si no, resuelve la promesa
        });
    });
}
// Función que agrega la fecha usando promesas y then/catch
function agregarFechaPromesa() {
    leerArchivoPromesa(archivo) // Lee el archivo
        .then(contenido => escribirArchivoPromesa(archivo, contenido + '\n' + fecha)) // Escribe el nuevo contenido
        .then(() => console.log('Promesa: Fecha agregada correctamente')) // Mensaje de éxito
        .catch(err => console.error('Error (promesa):', err)); // Manejo de errores
}

// --- ASYNC/AWAIT ---
// Función que agrega la fecha usando async/await
async function agregarFechaAsync() {
    try {
        const contenido = await leerArchivoPromesa(archivo); // Espera a leer el archivo
        await escribirArchivoPromesa(archivo, contenido + '\n' + fecha); // Espera a escribir el nuevo contenido
        console.log('Async/Await: Fecha agregada correctamente'); // Mensaje de éxito
    } catch (err) {
        console.error('Error (async/await):', err); // Manejo de errores
    }
}

// --- Ejecutar las tres formas ---
agregarFechaCallback();    // Ejecuta la versión con callbacks
agregarFechaPromesa();     // Ejecuta la versión con promesas then/catch
agregarFechaAsync();       // Ejecuta la versión con async/await