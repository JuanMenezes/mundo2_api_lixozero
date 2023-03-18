var express = require('express');
var router = express.Router();
var usuarios_backend = require('../backend_const/usuarios_const.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(usuarios_backend);
});

module.exports = router;
