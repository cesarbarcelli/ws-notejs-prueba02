// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  BASE DE DATOS
// ============================
let urlDB;

//if (process.env.NODE_ENV === 'dev') {
//    urlDB = 'mongodb://localhost:27017/cafe';
//} else {
urlDB = 'mongodb+srv://cafe-user:Cesar123456@cluster0.tlk3m.mongodb.net/cafe'
    //};

process.env.URLDB = urlDB;