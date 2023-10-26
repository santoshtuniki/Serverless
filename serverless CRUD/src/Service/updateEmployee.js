const Employee = require("../Model/employeeSchema");

const updateEmployee = async (event) => {

    const { id } = event.pathParameters;

    const { designation } = event.queryStringParameters;

    let response;

    try {

        const updatedEmployee = await Employee.findByIdAndUpdate(
            id, 
            {
                designation: designation
            }, 
            {
                new: true
            }
        );

        if(updatedEmployee){

            response = {
                status: true,
                message: updatedEmployee
            }

        }else{
            
            response = {
                status: false,
                message: `No employee found with id: ${id}`
            }

        }
        
    }catch(error){

        console.log("updateEmployee error: ", error.message);

        response = {
            status: false,
            message: error.message
        }

    }

    return response;
    
};

module.exports = updateEmployee;