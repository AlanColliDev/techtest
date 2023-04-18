import express from 'express';
import {response, Router} from 'express';

import cors from 'cors';

const server = express();
server.use(cors());

server.set('PORT', 3000);


server.use(router);


export default server;