import model from '../../models/';

export const getAll = async(req, res) => {
	try {
		
		const userData = await model.alumno.findAll();
		res.status(200).json({
			message: 'records was loaded successfully',
			data: userData
		});

	} catch (error) {

		res.status(404).json({
			message: 'error',
			data:error
		});

	}
};

export const createNew = async(req, res) => {

	try {

		await model.alumno.create({
			matricula: req.body.matricula,
			nombre: req.body.nombre,
			apellido_paterno: req.body.apellidoPaterno,
			apellido_materno: req.body.apellidoMaterno,
			genero: req.body.genero,
		}).then((result) => {
			res.status(201).json({
				message: 'alumn was created successfully',
				alumno: req.body.matricula
			});
		});
		
	} catch (error) {
		res.status(404).json({
			message: 'controlled error',
			data: error
		});
	}

};