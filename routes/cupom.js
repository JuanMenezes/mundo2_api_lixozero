var express = require('express');
var router = express.Router();
var { cupom } = require('../backend_const/backend_constantes.js')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json(cupom);
});

module.exports = router;