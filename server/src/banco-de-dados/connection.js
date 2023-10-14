const { Sequelize, DataTypes } = require('sequelize');

const conexao = new Sequelize('', '', '', {
    host: 'localhost', // Host do banco de dados MySQL
    dialect: 'mysql',
  });

/*const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  // Outros campos da tabela
});

(async () => {
  await sequelize.sync(); 

  // Exemplo de consulta
  const users = await User.findAll();
  console.log('Resultados da consulta:', users);
})();*/


module.exports = {
    conexao: conexao,
    
}
