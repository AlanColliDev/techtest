import server from './server';

server.listen(server.get('PORT'), () => {
	console.log('HI! IM WORKING ON PORT...', this.address().port)
});