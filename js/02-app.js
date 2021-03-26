//  2. Comparar 2 valores
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales

console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true se fija en el valor

// Comparador Estricto. se Fija en Valor y Tipo de dato 
console.log(numero1 === numero2); // False tipo de dato es distinto. numero1 entero y numero2 string.

// typeof indica el tipo de datos
console.log(typeof numero1);// number
console.log(typeof numero2);// string

console.log(numero1 === parseInt(numero2));// true

// Diferente
const password1 = "admin",
      password2 = "Admin";

console.log(password1 != password2);// true
console.log(numero1 != numero2);// false
// Diferente Estricto
console.log(numero1 !== numero2);// true