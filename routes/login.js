const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

const {check, validationResult, body} = require('express-validator');


router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', 
check('nomeUsuario').isLength({min: 4}),
check('senha').isLength({min: 6}),
async (req, res, next) => {
    const { nomeUsuario, senha } = req.body;
    
    const { usuario_id: userId } = await loginController.fazerLogin({ nomeUsuario, senha });
    req.session.userId = userId;
    res.redirect('/perfil');
}
);

module.exports = router;