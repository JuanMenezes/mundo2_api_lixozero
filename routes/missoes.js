var express = require('express');
var router = express.Router();
var { missoes } = require('../backend_const/backend_constantes.js')
//TODO validar não testado antes do almoço
/* GET missoes */
router.get('/', function (req, res, next) {
    res.status(200).json(missoes);
    //TODO verificar se essa logica aqui faz sentido
    if (res.status != 200) {
        res.status(404).send('Missoes não encontrada!');
    }
});

/* GET missoes por ID */
router.get('/:idmissoes', function (req, res, next) {
    const idmissoes = req.params.idmissoes;

    // Procura o missoes pelo ID
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].idmissoes == idmissoes) {
            res.status(200).json(missoes[i]);
            return;
        }
    }

    // Se as missoes não for encontrado, envie um erro 404
    res.status(404).send('Missoes não encontrado!');
});


/* POST missoes */
router.post('/', function (req, res, next) {
    const nova_missao = req.body;
    missoes.push(nova_missao);
    res.status(201).send('Missao Cadastrada');
});


/* PUT users/:idmissoes */
router.put('/:idmissoes', function (req, res) {
    const idmissoes = req.params.idmissoes;
    const nova_missao = req.body;

    // Encontre a missao pelo ID e atualize suas informações
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].idmissoes == idmissoes) {
            missoes[i] = nova_missao;
            res.status(200).send('Missao atualizado com sucesso!');
            return;
        }
    }

    // Se a missao não for encontrado, envie um erro 404
    res.status(404).send('Missao não encontrado!');
});

/* PATCH users/:idmissoes */
router.patch('/:idmissoes', function (req, res) {
    const idmissoes = req.params.idmissoes;
    const nova_missao = req.body;

    // Encontre a missao pelo ID e atualize suas informações
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].idmissoes == idmissoes) {
            //Não curto um n² de complexidade para algo tão simples, rever se possivel
            for (let key in nova_missao) {
                missoes[i][key] = nova_missao[key];
            }
            res.status(200).send('Missao atualizado com sucesso!');
            return;
        }
    }
    // Se a missao não for encontrado, envie um erro 404
    res.status(404).send('Missao não encontrado!');
});


/* DELETE users/:idmissoes */
router.delete('/:idmissoes', function (req, res, next) {
    const idmissoes = req.params.idmissoes;

    // Encontre a missao pelo ID e remova-o
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].idmissoes == idmissoes) {
            missoes.splice(i, 1);
            res.status(200).send('Missao removido com sucesso!');
            return;
        }
    }

    // Se a missao não for encontrado, envie um erro 404
    res.status(404).send('Missao não encontrado!');
});


module.exports = router;