const express = require("express");
const router = express.Router();
const validadores = require('../validators/cadastroValidators');

/* express-validator */
const {check, validationResult, body} = require('express-validator');

const cadastroController = require('../controllers/cadastroController');

router.get('/', (req, res, next) => {
    res.render('cadastro', { title: "cadastrar"});
});

router.post('/', async (req, res, next) => {
    const { nomeUsuario, senha, confirmaSenha, email } = req.body
    const usuario = await cadastroController.cadastrarUsuario({ nomeUsuario, senha, confirmaSenha, email });
    res.render('cadastro', {title: "cadastrar", usuario: { nomeUsuario, email }} )
});

module.exports = router;
