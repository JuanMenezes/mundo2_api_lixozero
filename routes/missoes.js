var express = require('express');
var router = express.Router();
var { missoes } = require('../backend_const/backend_constantes.js')
/* GET missoes */
router.get('/', function (req, res, next) {
    res.status(200).json(missoes);
});

/* POST missoes */
router.post('/', function (req, res, next) {
    const nova_missao = req.body;
    missoes.push(nova_missao);
    res.status(201).send('Missao Cadastrada');
});

module.exports = router;