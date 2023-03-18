var express = require('express');
var router = express.Router();
var { ponto_coleta } = require('../backend_const/backend_constantes.js')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json(ponto_coleta);
});

module.exports = router;