var express = require('express');
var router = express.Router();
var { cupom } = require('../backend_const/backend_constantes.js')
//TODO validar não testado antes do almoço
/* GET cupom*/
router.get('/', function (req, res, next) {
    res.status(200).json(cupom);
    //TODO verificar se essa logica aqui faz sentido
    if (res.status != 200) {
        res.status(404).send('Cupom não encontrado!');
    }
});


/* GET cupom por ID */
router.get('/:idcupom', function (req, res, next) {
    const idcupom = req.params.idcupom;

    // Procura o cupom pelo ID
    for (let i = 0; i < cupom.length; i++) {
        if (cupom[i].idcupom == idcupom) {
            res.status(200).json(cupom[i]);
            return;
        }
    }

    // Se as cupom não for encontrado, envie um erro 404
    res.status(404).send('cupom não encontrado!');
});

/* POST cupom */
router.post('/', function (req, res, next) {
    const novo_cupom = req.body;
    cupom.push(novo_cupom);
    res.status(201).send('Cupom Cadastrado!');
});

/* PUT cupons/:idcupom */
router.put('/:idcupom', function (req, res) {
    const idcupom = req.params.idcupom;
    const novo_cupom = req.body;

    // Encontre a Cupom pelo ID e atualize suas informações
    for (let i = 0; i < cupom.length; i++) {
        if (cupom[i].idcupom == idcupom) {
            cupom[i] = novo_cupom;
            res.status(200).send('Cupom atualizado com sucesso!');
            return;
        }
    }

    // Se a Cupom não for encontrado, envie um erro 404
    res.status(404).send('Cupom não encontrado!');
});

/* PATCH users/:idcupom */
router.patch('/:idcupom', function (req, res) {
    const idcupom = req.params.idcupom;
    const novo_cupom = req.body;

    // Encontre a Cupom pelo ID e atualize suas informações
    for (let i = 0; i < cupom.length; i++) {
        if (cupom[i].idcupom == idcupom) {
            //Não curto um n² de complexidade para algo tão simples, rever se possivel
            for (let key in novo_cupom) {
                cupom[i][key] = novo_cupom[key];
            }
            res.status(200).send('Cupom atualizado com sucesso!');
            return;
        }
    }
    // Se a Cupom não for encontrado, envie um erro 404
    res.status(404).send('Cupom não encontrado!');
});


/* DELETE users/:idcupom */
router.delete('/:idcupom', function (req, res, next) {
    const idcupom = req.params.idcupom;

    // Encontre a Cupom pelo ID e remova-o
    for (let i = 0; i < cupom.length; i++) {
        if (cupom[i].idcupom == idcupom) {
            cupom.splice(i, 1);
            res.status(200).send('Cupom removido com sucesso!');
            return;
        }
    }

    // Se a Cupom não for encontrado, envie um erro 404
    res.status(404).send('Cupom não encontrado!');
});



module.exports = router;