const app = require('./app'); // me importa app
const http = require('http'); //es un protocolo, tiene que ver con internet

 const server = http.createServer(app) //esto va a correr app

 server.listen(3000, () => {  //esto escucha, le digo que corra el servidor
    console.log('el servidor esta coriendo en el puerto 3000');
    console.log('http://localhost:3000');
 });