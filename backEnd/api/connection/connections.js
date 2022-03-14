const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'holamundo',
    database: 'angular'
});

mySqlConnection.connect(error => {
    if (error) {
        console.log('Error en db:', error);
        return;
    } else {
        console.log('Db Ok');
    }
});

module.exports = mySqlConnection;