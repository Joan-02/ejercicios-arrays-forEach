/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/

const taskList = [
  {
    tarea1: "estudiar",
    completed: true,
  },
  {
    tarea2: "limpiar",
    completed: true,
  },
  {
    tarea3: "comprar",
    completed: false,
  },
];

const taskIncompleted = [];

taskList.forEach(function (task) {
  /** task es el nombre del objeto */ console.log("se está llamando", task);
  if (!task.completed) {
    taskIncompleted.push(task);
  }
});

console.log(taskIncompleted);

/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

const vehicle = [
  {
    marca: "ford",
    modelo: "focus",
    tamaño: "mediano",
    color: "azul",
    año: 2022,
  },
  {
    marca: "citroen",
    modelo: "C4",
    tamaño: "grande",
    color: "gris",
    año: 2015,
  },
  {
    marca: "ferrari",
    modelo: "la ferrari",
    tamaño: "mediano",
    color: "rojo",
    año: 2024,
  },
  {
    marca: "toyota",
    modelo: "raptor",
    tamaño: "grande",
    color: "negro",
    año: 2020,
  },
  {
    marca: "fiat",
    modelo: "500",
    tamaño: "pequeño",
    color: "blanco",
    año: 2019,
  },
];

const taskIncompleted = [];

vehicle.forEach(function (ruperto) {
  /** ruperto es el nombre del objeto */ console.log(
    "se está llamando",
    ruperto
  );

  if (ruperto.color === "blanco") {
    taskIncompleted.push(ruperto);
  }
});

console.log(taskIncompleted);

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/
const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

function itemBought(list, itemToRemove) {
  const indexToRemove = list.indexOf(itemToRemove);

  if (indexToRemove > -1) {
    list.splice(indexToRemove, 1);
  }
}

itemBought(shoppingList, "pepino");
console.log(shoppingList);

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
 */

const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

function itemBought(list, itemToRemove) {
  const listCopy = [...list]; // list.slice()
  const indexToRemove = listCopy.indexOf(itemToRemove);

  if (indexToRemove > -1) {
    listCopy.splice(indexToRemove, 1);
  }

  return listCopy;
}

const arrayReturned = itemBought(shoppingList, "pepino");
console.log("returned", arrayReturned);
console.log("original", shoppingList);

/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

let totalPriceProducts = 0;

shoppingCart.forEach(function (item) {
  totalPriceProducts += item.price * item.quantity;
});

console.log(totalPriceProducts);

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
  A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/

const tasks = [
  { name: "shopping", completed: false },
  { name: "homework", completed: true },
  { name: "clean", completed: true },
  { name: "sport", completed: true },
  { name: "reading", completed: false },
  { name: "cooking", completed: true },
];

const taskCompleted = [];
const taskIncompleted = [];

tasks.forEach(function (task) {
  if (task.completed === true) {
    taskCompleted.push(task);
  } else {
    taskIncompleted.push(task);
  }
});

console.log(taskCompleted);
console.log(taskIncompleted);

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual 
 longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = [
  "manzana",
  "pera",
  "uva",
  "sandía",
  "granada",
  "plátano",
  "melón",
];
const frutasConInfo = [];
const crecenEnArbol = ["manzana", "pera", "granada", "plátano"];

frutas.forEach(function (fruta) {
  if (crecenEnArbol.includes(fruta)) {
    frutasConInfo.push({ nombre: fruta, creceEnArbol: true });
  }
});

console.log(frutasConInfo);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. 
   Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1, taxes: 2 },
  { product: "water", price: 1, quantity: 2, taxes: 1 },
  { product: "Pizza carbonara", price: 10, quantity: 3, taxes: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2, taxes: 2 },
];

let totalPriceProducts = 0;

shoppingCart.forEach(function (item) {
  totalPriceProducts += (item.price * item.quantity * 2) / 100;
});

console.log(totalPriceProducts);

/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

const shoppingCartWithTaxes = [];

shoppingCart.forEach(function (item) {
  let totalPrice = item.price * item.quantity;
  const taxes = totalPrice * 0.1;
  const newItem = { ...item, taxes };

  shoppingCartWithTaxes.push(newItem);
});

console.log(shoppingCartWithTaxes);

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita 
   eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", 
   el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

function removeProduct(productName) {
  shoppingCart.forEach(function (item, index) {
    if (item.product === productName) {
      if (item.quantity === 1) {
        shoppingCart.splice(index, 1);
      } else {
        item.quantity -= 1;
      }
    }
  });
}

removeProduct("Tiramisú");
removeProduct("Red wine");

console.log(shoppingCart);

/*una función que se llame filterArray y que sirva para filtrar cualquier array en base a unas condiciones que, a priori no sabemos.

Lo que tiene que hacer esa función es recorrer el array que queramos filtrar, y para cada elemento comprobar si devuelve las condiciones. 
Si es así, el elemento se guardará en otro array que solo tendrá los elementos filtrados.

Después de recorrer la función, devolveremos el array filtrado. 


La función aceptará dos parámetros:
El primero será el array que queramos filtrar
El segundo será una función que se llamará para cada elemento del array a filtrar y que debe devolver true o false . 
Esta segunda función aceptará a su vez dos parámetros: el elemento del array (aka ruperto) y el índice que ocupa.*/

function filterArray(array, filterFunction) {
  const filteredArray = [];
  
  array.forEach(function (arrayItem, index) {
    if (filterFunction(arrayItem, index)) {
      filteredArray.push(arrayItem);
    }
  });

  return filteredArray;
}

const tasks = [
  { text: "hacer deberes", isCompleted: true },
  { text: "hacer funcion dentro de funcion", isCompleted: false },
];

function isTaskCompleted(task, index) {
  console.log("Comprobando tarea con índice", index);

  return task.isCompleted;
}

const completedTasks = filterArray(tasks, isTaskCompleted);/*Esto sirve para traducir task y isTaskCompleted a array y fitlerFunction*/
console.log(completedTasks);



/*Indica las frutas que crecen en el arbol*/

const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || (fruitName === 'granada') || (fruitName === 'plátano')
  });
});

console.log(fruitsComplete);


/*Filtra las frutas que crecen en el arbol con .filter*/


const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano'
  });
});

const growInTreeArray = fruitsComplete.filter(function (fruitInfo) {
  return fruitInfo.growInTree;
});
console.log(growInTreeArray);


/*Crea un nuevo array con las frutas que crecen en el arbol con .map*/

const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];

const fruitsComplete = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano'
  };
});

console.log('array original', fruits);
console.log('array nuevo', fruitsComplete);


/*Ecuentra la primera fruta que no crece en un arbol*/

const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];

const fruitsComplete = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano'
  };
});
console.log(fruitsComplete);

const fruitFound = fruitsComplete.find(function (fruitInfo) {
  return !fruitInfo.growInTree; /*esto es lo mismo que fruitInfo.growInTree === false;*/
});

console.log(fruitFound);

/*wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]*/

function wave(str) {
  const result = [];
  const characters = str.split("");

  characters.forEach(function (char, index) {
    if (char === " ") {
      return;
    }

    const charactersCopy = [...characters];
    charactersCopy[index] = char.toUpperCase();
    result.push(charactersCopy.join(""));
  });
  console.log(result);
}

return wave("hello");

/*version 2*/

function wave(str) {
  const result = [];
  const characters = str.split("");

  characters.forEach(function (char, index) {
    characters[index] = char.toUpperCase();
    result.push(characters.join(""));
    characters[index] = char;
  });
  console.log(result);
}

return wave("hello");

/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input 
(input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.*/



function countSmileys(arr) {
  
  const totalSmiles = [0];

  arr.forEach (function(smile){
    if (smile.includes(':' || ';' && ')' || 'D')) {
      totalSmiles.push(simle + 1);
    }
  })

  return 0;

}

console.log (arr);

/*Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they"*/

function stringToArray(string){
  return string.split (' '); 

}

console.log(stringToArray('Robin Singh'));

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:Sam Harris => S.H , patrick feeney => P.F*/

function abbrevName(name){

  const nameArray = [];

  const words = name.split(' ');

  words.forEach(function(word,index){
    const initial = word[0].toUpperCase();
    nameArray.push(initial);
  })
  
  return nameArray.join('.')
  
}

console.log(abbrevName("John Doe"));

/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5"); // return "5 1"*/ 

function highAndLow(numbers){
  
  const maxAndMinNumber = [];
  const separatedNumbers = numbers.split(' ');

  separatedNumbers.forEach(function(number){
    const maxNumber = Math.max(number);
    maxAndMinNumber.push(maxNumber);
    const minNumber = Math.min(number);
    maxAndMinNumber.push(minNumber);
  })

return maxAndMinNumber;

}

console.log(highAndLow('1 2 3 4 5'));

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/