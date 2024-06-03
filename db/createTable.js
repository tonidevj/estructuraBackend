const db = require('.');


const createUserTable = async () => {
    const statement = db.prepare(`
    CREATE TABLE users (
        user_id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE
    )
    `);
    statement.run();
    console.log('tabla de usuarios creada');
};

const createContactTable = async () => {
    const statement = db.prepare(`
    CREATE TABLE users (
        contact_id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL UNIQUE,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id)
            REFERENCES user (user_id)
            ON DELETE CASCADE
    )
    `);
    statement.run();
    console.log('tabla de contactos creada');
};

const createTables = async () => {

} 
//no necesita await pero funciona como un await, lo que es sincrono es lo que esta adentro no afuera

// cambiar columnas de una WebTransportBidirectionalStream, crear WebTransportBidirectionalStream,
// que dos tablas de servidores distintos se unan