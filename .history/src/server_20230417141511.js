import express from 'express';
import alumnosRouter from './routes/alumnos.routes'
import cors from 'cors';

const server = express();
server.use(cors());

server.set('PORT', 3000);

server.use(alumnosRouter);


export default server;