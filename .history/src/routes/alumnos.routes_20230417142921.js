import {response, Router} from 'express';
import { getAll, createNew } from '../controllers/alumnos.controller';
const router = Router();

router.get('/alumno', getAll);
router.post('/alumno', createNew);


export default router;