var express = require('express');
var router = express.Router();
var { quiz } = require('../backend_const/backend_constantes.js')

/* GET quiz */
router.get('/', function (req, res, next) {
    res.status(200).json(quiz);
});

/* POST quiz */
router.post('/', function (req, res, next) {
    const novo_quiz = req.body;
    quiz.push(novo_quiz);
    res.status(201).send('Quiz Cadastrado!');
});


module.exports = router;