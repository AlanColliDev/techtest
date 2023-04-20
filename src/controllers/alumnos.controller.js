import { json } from 'body-parser';
import model from '../../models/index.js';

export const getAll = async (req, res) => {
	try {

		const userData = await model.alumno.findAll();
		res.status(200).json({
			message: 'records was loaded successfully',
			data: userData
		});

	} catch (error) {

		res.status(404).json({
			message: 'error',
			data: error
		});

	}
};

export const createNew = async (req, res) => {

	try {
		await model.alumno.create({
			matricula: req.body.matricula,
			nombre: req.body.nombre,
			apellido_paterno: req.body.apellidoPaterno,
			apellido_materno: req.body.apellidoMaterno,
			genero: req.body.genero,
		}).then((result) => {
			console.log('response local', result)
			res.status(201).json({
				message: 'alumn was created successfully',
				data: result.dataValues
			});
		});

	} catch (error) {
		res.status(404).json({
			message: 'controlled error',
			data: error
		});
	}

};

export const updateAlumno = async (req, res) => {

	try {

		await model.alumno.findAll({ where: { matricula: req.body.matricula } })
			.then(async (result) => {
				if ((!result.length > 0))
					res.status(404).json({
						message: "No existe el registro a actualizar."
					})
				else {
					await model.alumno.update(
						{
							nombre: req.body.nombre,
							apellido_materno: req.body.apellidoMaterno,
							apellido_paterno: req.body.apellidoPaterno,
							genero: req.body.genero
						},
						{ where: { matricula: req.body.matricula } }
					);

					await model.alumno.findAll({ where: { matricula: req.body.matricula } })
						.then(async (response) => {
							res.status(200).json({
								message: 'Información actualizada con éxito',
								data: response[0].dataValues
							});
						});
				}
			});

	} catch (error) {
		res.status(500).json({
			message: "resource failed",
			error: error
		})
	}
};

export const deleteAlumno = async (req, res) => {
	await model.alumno.findAll({ where: { matricula: req.body.matricula } })
		.then(async (result) => {
			if ((!result.length > 0))
				res.status(404).json({
					message: "Sin datos."
				})
			else {
				await model.alumno.destroy(
					{ where: { matricula: req.body.matricula } }
				);
				const data = await model.alumno.findAll();
				res.status(200).json({
					message: 'Registro eliminado con éxito',
					data
				});
			}
		});

}