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
			matricula: '567ghj789',
			nombre: 'dev',
			apellido_paterno: 'test',
			apellido_materno: 'jux',
			genero: 'f',
		}).then((result) => {
			res.status(201).json({
				message: 'alumn was created successfully',
				alumno: '567ghj789'
			});
		});
		
	} catch (error) {
		res.status(404).json({
			message: 'error',
			data:error
		});
	}

};