import express from 'express';
import alumnosRouter from './routes/alumnos.routes'
import cors from 'cors';

const bodyParser = require('body-parser');
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.set('PORT', 53445);

server.use(alumnosRouter);


export default server;
