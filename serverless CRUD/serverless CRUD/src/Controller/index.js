const connectDB = require("../Connect/db");

// connection to db
connectDB();

const createEmployee = require("../Service/createEmployee");

const getEmployee = require("../Service/getEmployee");

const updateEmployee = require("../Service/updateEmployee");

const deleteEmployee = require("../Service/deleteEmployee");

// create handler

export const create = async (event) => {

	const response = await createEmployee(event);

	return {

		body: JSON.stringify({

			output: response

		})

	};

};

// retrieve handler

export const retrieve = async (event) => {

	const response = await getEmployee(event);

	return {

		body: JSON.stringify({

			output: response

		})

	};

};

// update handler

export const update = async (event) => {

	const response = await updateEmployee(event);

	return {

		body: JSON.stringify({

			output: response

		})

	};

};

// delete handler

export const remove = async (event) => {

	const response = await deleteEmployee(event);

	return {

		body: JSON.stringify({

			output: response

		})

	};
	
};