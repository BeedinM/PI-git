const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('editarPerfil');
});

router.post('/', (req, res, next) => {
    res.render('editarPerfil')
})

module.exports = router;