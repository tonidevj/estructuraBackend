// el paquete que estamos usando es sqlite

// ahora estamos creando la data, sirve para conectar o crear la base de datos

const Database = require('better-sqlite3');
const { application } = require('express');
const db = new Database('contactos.db', { verbose: console.log });

module.exports = db;  //esto es para exportarlo y usarlo en cualquier parte de mi application. en este caso, de viasual studio
