const express = require('express');
const router = express.Router();
const confLogado = require('../middlewares/confLogado')

router.get('/', (req, res, next) => {

    res.render('feed');
})

module.exports = router;