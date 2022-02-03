const { check } = require('express-validator');


exports.validarUsuario = check('nomeUsuario').notEmpty().bail().isLength({min: 4}).withMessage('O nome de usuário deve conter no mínimo 4 caracteres.');
exports.validarSenha = check('senha').isLength({min: 6}).withMessage('A senha deve conter no mínimo 6 caracteres.');
exports.validarEmail = check('email').isEmail();
exports.validarNascimento = check('dataNascimento').isDate();


