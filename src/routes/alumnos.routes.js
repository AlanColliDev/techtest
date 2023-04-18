import {response, Router} from 'express';
import { getAll, createNew, updateAlumno } from '../controllers/alumnos.controller';
const router = Router();

router.get('/alumno', getAll);
router.post('/alumno', createNew);
router.put('/alumno', updateAlumno);


export default router;	