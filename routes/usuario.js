var express = require('express');
var router = express.Router();
var { usuarios } = require('../backend_const/backend_constantes.js')

/* GET users */
router.get('/', function (req, res, next) {
  res.status(200).json(usuarios);
  //TODO verificar se essa logica aqui faz sentido
  if (res.status != 200) {
    res.status(404).send('Usuario não encontrado!');
  }
});

/* GET user por ID */
router.get('/:idusuario', function (req, res, next) {
  const idusuario = req.params.idusuario;

  // Procura o usuário pelo ID
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idusuario == idusuario) {
      res.status(200).json(usuarios[i]);
      return;
    }
  }

  // Se o usuário não for encontrado, envie um erro 404
  res.status(404).send('Usuário não encontrado!');
});


/* POST users */
router.post('/', function (req, res) {
  const novo_usuario = req.body;
  usuarios.push(novo_usuario);
  res.status(201).send('Usuario Cadastrado!');
});

/* PUT users/:idusuario */
router.put('/:idusuario', function (req, res) {
  const idusuario = req.params.idusuario;
  const novo_usuario = req.body;

  // Encontre o usuário pelo ID e atualize suas informações
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idusuario == idusuario) {
      usuarios[i] = novo_usuario;
      res.status(200).send('Usuario atualizado com sucesso!');
      return;
    }
  }

  // Se o usuário não for encontrado, envie um erro 404
  res.status(404).send('Usuário não encontrado!');
});

/* PATCH users/:idusuario */
router.patch('/:idusuario', function (req, res) {
  const idusuario = req.params.idusuario;
  const novo_usuario = req.body;

  // Encontre o usuário pelo ID e atualize suas informações
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idusuario == idusuario) {
      //Não curto um n² de complexidade para algo tão simples, rever se possivel
      for (let key in novo_usuario) {
        usuarios[i][key] = novo_usuario[key];
      }
      res.status(200).send('Usuario atualizado com sucesso!');
      return;
    }
  }
  // Se o usuário não for encontrado, envie um erro 404
  res.status(404).send('Usuário não encontrado!');
});


/* DELETE users/:idusuario */
router.delete('/:idusuario', function (req, res, next) {
  const idusuario = req.params.idusuario;

  // Encontre o usuário pelo ID e remova-o
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idusuario == idusuario) {
      usuarios.splice(i, 1);
      res.status(200).send('Usuário removido com sucesso!');
      return;
    }
  }

  // Se o usuário não for encontrado, envie um erro 404
  res.status(404).send('Usuário não encontrado!');
});


module.exports = router;
