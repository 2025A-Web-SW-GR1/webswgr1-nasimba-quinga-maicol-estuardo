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

const adrian = {
  "nombre": "Adrian",
  'apellido': "Gonzalez",
  edad: 12,
  casado : false,
  zapatos: undefined,
  ropa: {
    color: "rojo",
    talla: "L",
  },
  mascotas: ["perro", "gato"],
};

//metodos de los objetos
console.log(adrian)
//Acceder a los atributos
adrian.nombre;
adrian["apellido"];
//Modificar los atributos
adrian.nombre = "Maicol";
adrian["nombre"] = "Maicol";
//Crear atributos
adrian.sueldo = 1000;
adrian["gastos"] = 100;
//Eliminar atributos
adrian.nombre = undefined;
delete adrian.nombre;


//Variables por valror y referencia

//Variables por valor
//Primitivos: string, number, boolean, null, undefined
let edadMaicol = 12;
let edadFernando = edadMaicol;
console.log(edadFernando);// 12
console.log(edadMaicol);// 12
edadMaicol = edadMaicol + 1;
console.log(edadMaicol);// 13
console.log(edadFernando);// 12
//Variables por referencia
//Object: {} []
let notas = {
  total: 10,
};

let notas2doBim = notas;//REFERENCIA
console.log(notas2doBim);// 10
notas2doBim.total = notas2doBim.total + 1;
console.log(notas2doBim);// 11
console.log(notas);// 11

//Como clonar
let notasClonadas1 = Object.assign({}, notas); //Objetos
let arregloACopiar = [1, 2, 3];
let arregloClonado = Object.assign([], arregloACopiar); //Arreglos
notasClonadas1.total = notasClonadas1.total + 1;
console.log(notas); // { total: 11 }
console.log(notas2doBim); // { total: 11 }
console.log(notasClonadas1); // { total: 12 }

//Arreglos
const arregloEjemplo = [1, 2, 3, 4, 5];
// for of (obtenemos el valor)
for (let valorDelArreglo of arregloEjemplo) {
  console.log('valorDelArreglo', valorDelArreglo);
}

// for in (obtenemos el indice)
for (let indiceDelArreglo in arregloEjemplo) {
  console.log('valorDelArreglo', arregloEjemplo[indiceDelArreglo]);
  console.log('indiceDelArreglo', indiceDelArreglo);
}

// Añadir al final un elemento
arregloEjemplo.push(6);
console.log(arregloEjemplo); // [1, 2, 3, 4, 5, 6]

// Añadir al principio un elemento
arregloEjemplo.unshift(0);
console.log(arregloEjemplo); // [0, 1, 2, 3, 4, 5, 6]

// Eliminar el último elemento
arregloEjemplo.pop();
console.log(arregloEjemplo); // [0, 1, 2, 3, 4, 5]

//Eliminar y agregar elementos
// splice - indice donde empezar
// splice - cantidad de elementos a eliminar
// splice - elementos a agregar
arregloEjemplo.splice(
  0 , //indice donde empezar
  2, //cantidad de elementos a eliminar
  7,8,9, //elementos a agregar
); 
// arreglo orignal [0, 1, 2, 3, 4, 5]
// elminiamos 2 elementos desde el indice 0 [0, 1]
// arreglo final [7, 8, 9, 2, 3, 4, 5]

//Operadores trabajar con arreglos
// Find
const arregloEjemplo2 = [1, 2, 3, 4, 5];
const resultadoFind = arregloEjemplo2.find((elemento) => {
  return elemento === 3;
}); 
console.log(resultadoFind); // 3
// Filter
const resultadoFilter = arregloEjemplo2.filter((elemento) => {
  return elemento > 3;
});
console.log(resultadoFilter); // [4, 5] 
// Map
const resultadoMap = arregloEjemplo2.map((elemento) => {
  return elemento * 2;
});
console.log(resultadoMap); // [2, 4, 6, 8, 10]
// Reduce
const resultadoReduce = arregloEjemplo2.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);
console.log(resultadoReduce); // 15
// ForEach
const resultadoForEach = arregloEjemplo2.forEach((elemento) => {
  console.log(elemento);
});
// [1, 2, 3, 4, 5]
// Some
const resultadoSome = arregloEjemplo2.some((elemento) => {
  return elemento > 3;
});
console.log(resultadoSome); // true
// Every
const resultadoEvery = arregloEjemplo2.every((elemento) => {
  return elemento > 3;
});
console.log(resultadoEvery); // false
// Includes
const resultadoIncludes = arregloEjemplo2.includes(3);
console.log(resultadoIncludes); // true
// IndexOf
const resultadoIndexOf = arregloEjemplo2.indexOf(3);
console.log(resultadoIndexOf); // 2
// LastIndexOf
const resultadoLastIndexOf = arregloEjemplo2.lastIndexOf(3);
console.log(resultadoLastIndexOf); // 2

//Funciones
function soloNuueros(a,b,c){
  return a + b + c;
}

function soloNumerosTS(a: number, b: number, c: number): number {
  return a + b + c;
}

function soloImprimir(texto: string): void {
  console.log(texto);
}

function soloImorimir2(texto: string): undefined {
  console.log(texto);
}

//Funciones nombradas
function nombreFuncion() {
  console.log("Hola");
}
//Funciones anonimas
const funcionsinNombre = function () {
  console.log("Hola");
}
 nombreFuncion();
funcionsinNombre();
[].forEach(function () { });

//Fat Arrow function
const funcionFatArrow = (
  a: number,
  b: number,
  c: number,
): number => {
  return a + b + c;
}

const functionFatArrowSinParametros = () => {
  console.log("Hola");
}

const functionFatArrowOmitirReturn = (a,b) => a + b;
const unSoloParametro = a => a + 1;

//Parametros Infitnitos
function sumarNumeroa (...numeros: number[]): number {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
console.log(sumarNumeroa(1, 2, 3, 4, 5)); // 15

//Destructuracion

//Destructuracion de objetos
const maicolDestructurado = {
  nombre: "Maicol", 
};

const carolinaDestructurado = {
  nombre: "Carolina",
  apellido: "Nasimba",
}

//merge de las dos variables (orden importa)
const maicolCarolina = {
  ...maicolDestructurado,
  ...carolinaDestructurado,
};
console.log(maicolCarolina); // { nombre: 'Carolina', apellido: 'Nasimba' }

const carolinaMaicol = {
  ...carolinaDestructurado,
  ...maicolDestructurado,
};
console.log(carolinaMaicol); // { nombre: 'Maicol', apellido: 'Nasimba' }

const overrideDestructurado = {
  ...carolinaDestructurado,
  ...maicolDestructurado,
  nombre: "Adrian",
};

//Destructuracion de arreglos
const arregloDestructuradoUno = [1, 2, 3];
const arregloDestructuradoDos = [4, 5, 6];

//Merge de los dos arreglos
const arregloUnoDosDestructurado = [
  ...arregloDestructuradoUno,
  ...arregloDestructuradoDos,
];
console.log(arregloUnoDosDestructurado); // [1, 2, 3, 4, 5, 6]

const arregloDosUnoDestructurado = [
  ...arregloDestructuradoDos,
  ...arregloDestructuradoUno,
];
console.log(arregloDosUnoDestructurado); // [4, 5, 6, 1, 2, 3]
//Destructuracion de arreglos es una forma de clonacion
const objetoACopiar = {a:1};
const objetoClonado = {...objetoACopiar};

