import server from './server';
const { Sequelize } = require('sequelize');

server.listen(server.get('PORT'), function() {
	console.log('HI! IM WORKING ON PORT...', this.address().port)
});