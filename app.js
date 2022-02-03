const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/* chamando o express-session */
const session = require('express-session');

/* chamando uma middleware que faz um log das ações em rotas que o usuário fez */
const logMiddleware = require('./middlewares/logSite');

/* requisitando os arquivos da pasta routes para uso nas rotas */
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const cadastroRouter = require('./routes/cadastro');
const perfilRouter = require('./routes/perfil');
const buscaRouter = require('./routes/busca');
const editPerfilRouter = require('./routes/editarPerfil');

const app = express();

/* usando o express-session */
app.use(session({ secret: Math.random().toString().slice(-10), resave: false, saveUninitialized: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Usando a middleware globalmente, qualquer requisição feita, passará aqui antes que que vá para as rotas */
app.use(logMiddleware)

/* usando fuções do express para idicar as rotas para os arquivos routes respectivos
(aqui eu também posso especificar middlewares a nível de rota, antes de passar para o router.) */
app.use('/', indexRouter);
/* app.use('/login', loginRouter); */
app.use('/cadastro', cadastroRouter);
app.use('/perfil', perfilRouter);
app.use('/busca', buscaRouter);
app.use('/perfil/editar-perfil', editPerfilRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
