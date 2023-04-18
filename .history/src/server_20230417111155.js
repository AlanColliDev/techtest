import express from 'express';
import {response, Router} from 'express';

import cors from 'cors';

const server = express();
const router = Router();
server.use(cors());

server.set('PORT', 3000);
router.get('/', (request, response) => {
	response.json({
		message: 'Hello, made by Alan Colli - 😍NODEJS💻'
	})
});
server.use(router);


export default server;