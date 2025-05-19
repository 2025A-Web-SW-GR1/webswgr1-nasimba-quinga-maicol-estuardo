console.log("Hola typescript");

let nombreS = "Fernando";
nombreS ="a";
nombreS = 'C';
let nombreTS: string = "Fernando";
console.log(typeof nombre, "nombre");

let numeros =1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; //Decimales
console.log(typeof numeros, "numeros decimales");

let booleano = true;
let booleanoTS: boolean = true;
booleano = false;
console.log(typeof booleano, "booleano");

let nulos = true;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [1, 2, 3];
let arreglosTS: number[] = [1, 2, 3];
let arreglosTS2: Array<number> = [1, 2, 3];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
let objetosTS2: { nombre: string; edad: number } = {
  nombre: "Fernando",
  edad: 12,
};
