var express = require('express');
var router = express.Router();
var { ponto_coleta } = require('../backend_const/backend_constantes.js')

/* GET pontocoleta */
router.get('/', function (req, res, next) {
    res.status(200).json(ponto_coleta);
});

/* POST pontocoleta */
router.post('/', function (req, res, next) {
    const novo_pontocoleta = req.body;
    ponto_coleta.push(novo_pontocoleta);
    res.status(201).send('Ponto de coleta Cadastrado!');
});

module.exports = router;