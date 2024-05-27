const fs = require('fs');

console.log("\ninicio del rpograma");

fs.readFile("archivo.txt","utf-8", (err, data) =>{
    if (err) throw err; 
    console.log(data);
}); //Se realiza una call back, ya que es una operación asincrona ejecutada en segundo plano

console.log("Fin del programa")

  