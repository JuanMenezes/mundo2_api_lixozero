var express = require('express');
var router = express.Router();
var { ponto_coleta } = require('../backend_const/backend_constantes.js')

/* GET pontocoleta */
router.get('/', function (req, res, next) {
    res.status(200).json(ponto_coleta);
    //TODO verificar se essa logica aqui faz sentido
    if(res.status != 200){
        res.status(404).send('Ponto de coleta não encontrado!');
    }
});

/* GET ponto_coleta por ID */
router.get('/:idponto_coleta', function (req, res, next) {
    const idponto_coleta = req.params.idponto_coleta;

    // Procura o ponto_coleta pelo ID
    for (let i = 0; i < ponto_coleta.length; i++) {
        if (ponto_coleta[i].idponto_coleta == idponto_coleta) {
            res.status(200).json(ponto_coleta[i]);
            return;
        }
    }

    // Se o ponto_coleta não for encontrado, envie um erro 404
    res.status(404).send('Ponto de coleta não encontrado!');
});


/* POST pontocoleta */
router.post('/', function (req, res, next) {
    const novo_pontocoleta = req.body;
    ponto_coleta.push(novo_pontocoleta);
    res.status(201).send('Ponto de coleta Cadastrado!');
});


/* PUT ponto_coleta/:idponto_coleta */
router.put('/:idponto_coleta', function (req, res) {
    const idponto_coleta = req.params.idponto_coleta;
    const novo_ponto_coleta = req.body;

    // Encontre o ponto_coleta pelo ID e atualize suas informações
    for (let i = 0; i < ponto_coleta.length; i++) {
        if (ponto_coleta[i].idponto_coleta == idponto_coleta) {
            ponto_coleta[i] = novo_ponto_coleta;
            res.status(200).send('Ponto de coleta atualizado com sucesso!');
            return;
        }
    }
    // Se o ponto_coleta não for encontrado, envie um erro 404
    res.status(404).send('Ponto de coleta não encontrado!');
});

/* PATCH ponto_coleta/:idponto_coleta */
router.patch('/:idponto_coleta', function (req, res) {
    const idponto_coleta = req.params.idponto_coleta;
    const novo_ponto_coleta = req.body;

    // Encontre o ponto_coleta pelo ID e atualize suas informações
    for (let i = 0; i < ponto_coleta.length; i++) {
        if (ponto_coleta[i].idponto_coleta == idponto_coleta) {
            //Não curto um n² de complexidade para algo tão simples, rever se possivel
            for (let key in novo_ponto_coleta) {
                ponto_coleta[i][key] = novo_ponto_coleta[key];
            }
            res.status(200).send('Ponto de coleta atualizado com sucesso!');
            return;
        }
    }
    // Se o ponto_coleta não for encontrado, envie um erro 404
    res.status(404).send('Ponto de coleta não encontrado!');
});


/* DELETE ponto_coleta/:idponto_coleta */
router.delete('/:idponto_coleta', function (req, res, next) {
    const idponto_coleta = req.params.idponto_coleta;

    // Encontre o ponto_coleta pelo ID e remova-o
    for (let i = 0; i < ponto_coleta.length; i++) {
        if (ponto_coleta[i].idponto_coleta == idponto_coleta) {
            ponto_coleta.splice(i, 1);
            res.status(200).send('Ponto de coleta removido com sucesso!');
            return;
        }
    }

    // Se o ponto_coleta não for encontrado, envie um erro 404
    res.status(404).send('Ponto de coleta não encontrado!');
});



module.exports = router;