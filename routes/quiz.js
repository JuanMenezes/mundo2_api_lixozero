var express = require('express');
var router = express.Router();
var { quiz } = require('../backend_const/backend_constantes.js')

/* GET quiz */
router.get('/', function (req, res, next) {
    res.status(200).json(quiz);
    //TODO verificar se essa logica aqui faz sentido
    if(res.status != 200){
        res.status(404).send('Quiz não encontrado!');
    }
});

/* GET user por ID */
router.get('/:idquiz', function (req, res, next) {
    const idquiz = req.params.idquiz;

    // Procura o quiz pelo ID
    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].idquiz == idquiz) {
            res.status(200).json(quiz[i]);
            return;
        }
    }

    // Se o Quiz não for encontrado, envie um erro 404
    res.status(404).send('Quiz não encontrado!');
});

/* POST quiz */
router.post('/', function (req, res, next) {
    const novo_quiz = req.body;
    quiz.push(novo_quiz);
    res.status(201).send('Quiz Cadastrado!');
});

/* PUT quiz/:idquiz */
router.put('/:idquiz', function (req, res) {
    const idquiz = req.params.idquiz;
    const novo_quiz = req.body;

    // Encontre o Quiz pelo ID e atualize suas informações
    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].idquiz == idquiz) {
            quiz[i] = novo_quiz;
            res.status(200).send('Quiz atualizado com sucesso!');
            return;
        }
    }
    // Se o Quiz não for encontrado, envie um erro 404
    res.status(404).send('Quiz não encontrado!');
});

/* PATCH users/:idquiz */
router.patch('/:idquiz', function (req, res) {
    const idquiz = req.params.idquiz;
    const novo_quiz = req.body;

    // Encontre o Quiz pelo ID e atualize suas informações
    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].idquiz == idquiz) {
            //Não curto um n² de complexidade para algo tão simples, rever se possivel
            for (let key in novo_quiz) {
                quiz[i][key] = novo_quiz[key];
            }
            res.status(200).send('Quiz atualizado com sucesso!');
            return;
        }
    }
    // Se o Quiz não for encontrado, envie um erro 404
    res.status(404).send('Quiz não encontrado!');
});


/* DELETE users/:idquiz */
router.delete('/:idquiz', function (req, res, next) {
    const idquiz = req.params.idquiz;

    // Encontre o Quiz pelo ID e remova-o
    for (let i = 0; i < quiz.length; i++) {
        if (quiz[i].idquiz == idquiz) {
            quiz.splice(i, 1);
            res.status(200).send('Quiz removido com sucesso!');
            return;
        }
    }

    // Se o Quiz não for encontrado, envie um erro 404
    res.status(404).send('Quiz não encontrado!');
});



module.exports = router;