var express = require('express');
var router = express.Router();
var {usuarios} = require('../backend_const/backend_constantes.js')
/* GET users */
router.get('/', function(req, res, next) {
  res.status(200).json(usuarios);
});

/* POST users */
router.post('/', function (req, res, next) {
  const novo_usuario = req.body;
  usuarios.push(novo_usuario);
  res.status(201).send('Usuario Cadastrado!');
});

module.exports = router;
