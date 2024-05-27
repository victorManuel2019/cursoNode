const fs = require("fs"); //Mandamos llamar el modulo de node a este archivo

console.log("\nInicio del programa"); 

const data = fs.readFileSync("archivo.txt", "utf8"); //pedimos que lea el archivo de manera sincrona, y su tipo de codigicsción.

console.log(data);

console.log("Find del programa"); 