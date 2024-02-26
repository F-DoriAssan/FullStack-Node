const fs = require("fs");
console.log("hola Node..!");

fs.readFile("./files/ejemplo_1.txt", function (error, data) {

    console.log("archivo",error,data);
})

console.log("YA");