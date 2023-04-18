import {response, Router} from 'express';
import { getAll, createNew, updateAlumno } from '../controllers/alumnos.controller';
const router = Router();

router.get('/alumno', getAll);
router.post('/alumno', createNew);
router.put('/alumno', updateAlumno);
router.get('/test', (req, resp) => {
	resp.status(200).json({
		message: "hello from NODEJS"
	})
});


export default router;	