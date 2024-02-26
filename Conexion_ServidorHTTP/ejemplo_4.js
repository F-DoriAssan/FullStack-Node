const http = require("http");
const fs = require("fs")

const server = http.createServer(function (peticion, repuesta) {
    fs.readFile("./files/ejemplo_7.txt","utf-8", function (err, data) {
        if (err) {
            console.log("error",err);

        }
        else{
            repuesta.end(data);
        }
    });    
    console.log("YA");
});

server.listen(3000, function () {
    console.log(`tu servidor esta listo en ${this.address().port}`)
})