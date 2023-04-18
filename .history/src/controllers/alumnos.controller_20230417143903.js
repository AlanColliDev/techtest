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
		console.log('request', req.params)
		await model.alumno.create({
			matricula: req.params.matricula,
			nombre: req.params.nombre,
			apellido_paterno: req.params.apellidoPaterno,
			apellido_materno: req.params.apellidoMaterno,
			genero: req.params.genero,
		}).then((result) => {
			res.status(201).json({
				message: 'alumn was created successfully',
				alumno: req.params.matricula
			});
		});
		
	} catch (error) {
		res.status(404).json({
			message: 'controlled error',
			data: error
		});
	}

};