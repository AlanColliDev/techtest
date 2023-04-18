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
			message: '',
			data:error
		});

	}
};