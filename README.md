# BasicProject

Projeto básico, feito com Express, no padrão MVC, utilizando o template engine EJS;
Páginas simples com HTML e CSS;
Código em JavaScript possibilitando o usuário fazer cadastro e login, por rotas diferentes, com a utilização de middlewares como express validator, session e cookies, permitindo verificação de usuário logado por sessão.
Não foi ainda implementado o ORM sequelize para a conexão com o banco de dados, então o usuário é salvo em um arquivo JSON, com sua senha cryptografada com o BCrypt.

Edit: Sequelize implementado, já fazendo conexão com o banco de dados e modelo de login já alterado para buscar as informações com o sequelize.
