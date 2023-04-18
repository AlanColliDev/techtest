import {response, Router} from 'express';

const router = Router();

router.get('/', (request, response) => {
	response.json({
		message: 'Hello, made by Alan Colli - 😍NODEJS💻'
	})
});

