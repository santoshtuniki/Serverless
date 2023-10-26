const Employee = require("../Model/employeeSchema");

const getEmployee = async (event) => {

    const payload = event.queryStringParameters;

    let response;

    try {

        // If query parameters available
        if(payload){

            const employee = await Employee.findById(payload.id);

            if(employee){

                response = {
                    status: false,
                    message: employee
                }

            }else {

                response = {
                    status: false,
                    message: `No employee found with id: ${payload.id}`
                }

            }

        }else{

            // If NO query parameters available
            const employees = await Employee.find({});

            if(employees.length===0){

                response = {
                    status: false,
                    message: `No employee found`
                }

            }else{

                response = {
                    status: true,
                    message: employees
                }

            }

        }
        
        
    }catch(error){

        console.log("getEmployee error: ", error.message);

        response = {
            status: false,
            message: error.message
        }
        
    }

    return response;

};

module.exports = getEmployee;