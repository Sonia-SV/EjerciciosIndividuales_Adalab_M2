'use strict';

//EJERCICIO 1

/* ¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío! */

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

//EJERCICIO 2
/*Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?*/

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHiNames = names.map((name) => `Bienvenida, ${name}`);

console.log(sayHiNames);

//EJERCICIO 3
/*Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map? */

const users = [
  { Name: 'María', Account: 'premiun' },
  { Name: 'Lucía', Account: 'free' },
  { Name: 'Catalina', Account: 'free' },
  { Name: 'Susana', Account: 'free' },
  { Name: 'Rocío', Account: 'premiun' },
  { Name: 'Inmaculada', Account: 'free' },
];

const sayHi = users.map((user) => {
  if (user.Account === 'premiun') {
    console.log(`Bienvenida, ${user.Name}. Gracias por confiar en nosotros.`);
  } else {
    console.log(`Bienvenida, ${user.Name}.`);
  }
});

//EJERCICIO 4
/*Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?*/

const premiumUsers = users.filter((user) => user.Account === 'premiun');

console.log(premiumUsers);

//EJERCICIO 5
/* Los pares pueden entrar
Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
const pins = [2389, 2384, 2837, 5232, 8998];
De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
*/
const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((pin) => pin % 2 === 0);

console.log(evenPins);

//EJERCICIO 6
/* Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?*/

const appUsers = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//EJERCICIO 7
/*Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?*/
const times = [56, 9, 45, 28, 35];
const average = times.reduce((acc, number) => acc + number) / times.length;

console.log(average);

//EJERCICIO 8
/* Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :)*/
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

//EJERCICIO 9
/*Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son.*/
const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

//EJERCICIO 10
/*a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.
b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.*/
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];
