const Employee = require("../Model/employeeSchema");

const createEmployee = async (event) => {

    const payload = JSON.parse(event.body);

    let response;

    try {

        const employee = new Employee(payload);

        await employee.save();

        response = {
            status: true,
            message: employee
        }

    }catch(error){

        console.log("createEmployee error: ", error.message);

        response = {
            status: false,
            message: error.message
        }
        
    }

    return response;

};

module.exports = createEmployee;