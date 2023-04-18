import express from 'express';

import cors from 'cors';

const server = express();
server.use(cors());

server.set('PORT', 53456);

export default server;