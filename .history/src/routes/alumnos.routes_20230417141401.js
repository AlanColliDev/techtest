import {response, Router} from 'express';
import { maketest } from '../controllers/alumnos.controller';
const router = Router();

router.get('/alumno', maketest);


export default router;