// =======
// Puerto
// =======
process.env.PORT = process.env.PORT || 3000;

// =======
// Entorno
// =======
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======
// Base de datos
// =======

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// mongodb: //localhost:27017/cafe
//     mongodb+srv: //strider:oBiOpZxIifIL414Q@cluster0-dzgjy.mongodb.net/cafe