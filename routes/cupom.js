var express = require('express');
var router = express.Router();
var { cupom } = require('../backend_const/backend_constantes.js')
/* GET cupom*/
router.get('/', function (req, res, next) {
    res.status(200).json(cupom);
});

/* POST cupom */
router.post('/', function (req, res, next) {
    const novo_cupom = req.body;
    cupom.push(novo_cupom);
    res.status(201).send('Cupom Cadastrado!');
});

module.exports = router;