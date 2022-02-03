module.exports = function (req, res, next) {
  console.log(req.session.userId)
    if (req.session.userId) {
      next();
    } else {
      res.redirect("/");
    }
  };