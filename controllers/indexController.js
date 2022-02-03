const indexController = {
    viewIndex: (req, res) => {
        res.render('inicio', {title: "inicio"});
    }
};

module.exports = indexController;