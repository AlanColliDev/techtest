import express from 'express';
import alumnosRouter from './routes/alumnos.routes'
import config from './config'
import cors from 'cors';

const bodyParser = require('body-parser');
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.set('PORT', config);

server.use(alumnosRouter);


export default server;
