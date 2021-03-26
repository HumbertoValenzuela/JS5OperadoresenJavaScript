// 3. Comparar Null y undefined en JavaScript
 let compararU;

 console.log(compararU);//undefined
 console.log(typeof compararU); // undefined

 // Null
 let compararNull = null;

 console.log(compararNull);//null
//  JS reconoce a null como tipo de dato Objeto
 console.log(typeof compararNull); // object

//  Comparar null y undefined
console.log(compararNull == compararU);//true
console.log(compararNull === compararU);//false