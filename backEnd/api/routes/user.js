const express = require('express');
const router = express.Router();
const mySqlConnection = require('../connection/connections');
const jwt = require('jsonwebtoken');


//Iniciar bd :  mysql -u root -p

router.get('/', (req, res) => {
    mySqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/singin', (req, res) => {
    const { userName, pass } = req.body;
    mySqlConnection.query('select userName, rolId from user where userName=? AND pass = ?', [userName, pass],
        (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'david');
                    res.json({ token });

                } else {
                    res.json('usuario o clave incorrecto');
                }
            } else {
                console.log(err);
            }
        });

});

router.post('/test', verifyToken, (req, res) => {
    res.json('Informacion secreta');
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json('No autorizado');
    }

    const token = req.headers.authorization.substr(7);
    //Valido si el token sta vigente aun
    if (token != '') {
        const content = jwt.verify(token, 'david');
        req.data = content;
        next();

    }
}

module.exports = router;