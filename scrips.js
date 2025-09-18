alert("Hola mundo");
let nombre = "Mario";
const edad =64;
const domicilio= "Cangallo";
console.log(nombre, edad, domicilio);
let numero= 1;
let texto = "Hola";
let booleano = true;
let arreglo = [1,3,5,7,9];
let objeto = {nombre: 'Marito', edad: 300};
console.log(numero, texto, booleano, arreglo, objeto);

//Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

let resultado =10+5;
console.log(resultado);
let resultado2 =80-20;
console.log(resultado2)
let resultado3 =10*5;
console.log(resultado3);
let resultado4 =10/2;
console.log(resultado4);
let resultado5 =10%3; // asi se presenta el resto
console.log(resultado5);  

let esMayorDeEdad = edad >= 18;
console.log("es mayor de edad?", esMayorDeEdad);

let Mario =40;
let julian = 15;
let esMayor = Mario > julian;
console.log("Mario es mayor que Julian?", esMayor);
let esIgual = Mario == julian;
console.log("Mario es igual que Julian?", esIgual);
let esDiferente = Mario != julian;
console.log("Mario es diferente que Julian?", esDiferente);

let esVerdadero =true && true;

let nombre1 = 'Juan';
const edad1 =20;
console.log(`Hola, el nombre es ${nombre1} y tengo ${edad1} años`);

let suma =10+5;
console.log(`El resultado de la suma de 10 + 5 es ${suma}....`); 

if (edad1 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Lógica de la calculadora simple
let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value !== '' && !isNaN(display.value.slice(-1))) {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
  const nombremc ="Mario Coppa";
    console.log(nombremc);
    let num1 = 77;
    let num2 = 33;
    let suma3 = num1 + num2;
    console.log("La suma es: " + suma3);
   // Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.
   let resultado1 = (10 > 5) && (5 < 2);
console.log(resultado1); // Imprime: false

let edada = 20;
console.log(`El resultado inicial de edad es ${edada}....`); 
edada = 30;
console.log(`El resultado modificada de edad es ${edada}....`); 
const edadb = 120;
console.log(`El resultado de edadb es ${edadb}....`);

let condicion = true;
let resultadoLogico = condicion && (10 < 5);
console.log("¿La condición y 10 > 5 son verdaderas?", resultadoLogico);

let variableEjemplo = 42;
console.log("El tipo de dato de variableEjemplo es:", typeof(variableEjemplo));

let miArray = [10, 20, 30+25, 40, 50];
console.log("El tercer elemento del array es:", miArray[2]);

let miArray1 = ["Ana", "Juan", "Mendoza", 3.14, 54, true];  
console.log("La ciudad de miObjeto es:", miArray1[2]);
console.log("el 5to elemento es:", miArray1[4]);

let resto = 17 % 3;
console.log("El resto de 17 ÷ 3 es:", resto);

//Declara una variable sin valor e imprime su valor inicial.
let variableSinValor;
console.log("El valor inicial de variableSinValor es:", variableSinValor); // Imprime: undefined
// TIPOS DE TIPEOFF
typeof "John"
console.log("EL typeoff de John es: ", typeof("John"));
typeof 3.14
console.log("EL typeoff de 3.14 es: ", typeof(3.14));
typeof NaN
console.log("EL typeoff de NaN es: ", typeof(NaN));
typeof false
console.log("EL typeoff de false es: ", typeof(false));
typeof [1, 2, 3, 4]
console.log("EL typeoff de 1,2,3,5 es: ", typeof([1, 2, 3, 4]));
typeof {name:'John', age:34}
console.log("EL typeoff de John 34 es: ", typeof({name:'John', age:34}));
typeof new Date();
//console.log("EL typeoff de Date es: ", typeof(date()));
//typeof function () {};
//console.log("EL typeoff de () {} es: ", typeof(() {}));
typeof myCar
console.log("EL typeoff de myCar es: ", typeof(myCar));
typeof null
console.log("EL typeoff de null es: ", typeof(null));



//..........Clase 3............

// Declaración de variable con mi nombre
let nombrecgpt = "ChatGPT";
console.log("Hola, mi nombre es " + nombrecgpt);

// Declaración y suma de dos números
let num_1 = 8;
let num_2 = 12;
let sumaa = num_1 + num_2;
console.log("La suma es: " + sumaa);

// Uso de operadores lógicos
console.log("¿10 > 5 y 5 < 2? " + (10 > 5 && 5 < 2));

// Variables con let y const
let edad11 = 25;
const pais = "Argentina";

edad11 = 30; // ✅ let se puede cambiar
// pais = "Chile"; ❌ const no se puede reasignar

console.log("Edad actual: " + edad11);
console.log("País: " + pais);

// Comentario: este código demuestra conceptos básicos de JavaScript

// Variable booleana en operación lógica
let esMayor1 = true;
console.log("¿Es mayor y 10 > 5? " + (esMayor1 && 10 > 5));

// Imprimir tipo de dato
console.log("El tipo de 'nombre' es: " + typeof nombre);

// Declarar un array y mostrar un elemento
let colores = ["rojo", "verde", "azul"];
console.log("Un color es: " + colores[1]);

// Operación con %
let resto1 = 17 % 3;
console.log("El resto de 17 ÷ 3 es: " + resto1);

// Declarar variable sin valor
let sinValor;
console.log("Valor inicial de sinValor: " + sinValor);