import model from '../../models/';

export const maketest = async(req, res) => {
	try {
		
		const userData = await model.alumno.findAll();
		console.log('hey listening...', userData)
		res.status(200).json({
			message: '',
			data: userData
		});

	} catch (error) {

		res.status(404).json({
			message: '',
			data:error
		});

	}
};