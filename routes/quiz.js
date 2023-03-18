var express = require('express');
var router = express.Router();
var { quiz } = require('../backend_const/backend_constantes.js')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json(quiz);
});

module.exports = router;