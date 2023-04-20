import {response, Router} from 'express';
import { getAll, createNew, updateAlumno, deleteAlumno } from '../controllers/alumnos.controller.js';
const router = Router();

router.get('/alumno', getAll);
router.post('/alumno', createNew);
router.put('/alumno', updateAlumno);
router.delete('/alumno', deleteAlumno);
router.get('/', (req, resp) => {
	resp.status(200).json({
		message: "hello from NODEJS - Alan Colli "
	})
});


export default router;	