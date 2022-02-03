const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
const confLogado = require('../middlewares/confLogado');

router.get('/', confLogado, async (req, res, next) => {
    const usuario_id = req.session.userId;
   
        const usuario = await perfilController.conferirId(usuario_id)
        res.render('perfil', {usuario});
        console.log(usuario)
});

router.get('/editar/:id', confLogado, (req, res, next) => {
    const usuarioId = req.params.id;
    const usuarioSession = req.session.userId;

    if(usuarioId == usuarioSession){
        res.render('editarPerfil')
    } else {
        res.redirect('/')
    }

    console.log(usuarioId);
});

router.post('/editar/:id', (req, res, next) => {
    const jogoJogado = req.body;
    
});

router.get('/edit/valorant', confLogado, (req, res, next) => {
    res.render('editVal')
});

router.post('/edit/valorant', async (req, res, next) => {
    const { pers_principal, pers_secundario, func_principal, func_secundaria, elo } = req.body;
    const perfVal = await perfilController.addValorant({ pers_principal, pers_secundario, func_principal, func_secundaria, elo })
    console.log(perfVal)
});

module.exports = router;