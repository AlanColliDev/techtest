import server from './server';
const { Sequelize } = require('sequelize');

server.listen(server.get('PORT'), async function() {
	console.log('HI! IM WORKING ON PORT...', this.address().port)
	const sequelize = new Sequelize('db_a97cda_techtest', 'db_a97cda_techtest_admin', 'Demotest01.', {
		host: 'sql8005.site4now.net',
		dialect: 'mssql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
	});
	
	
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
});

