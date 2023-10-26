const Employee = require("../Model/employeeSchema");

const deleteEmployee = async (event) => {

    const { id } = event.pathParameters;

    let response;

    try {

        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if(deletedEmployee){

            response = {
                status: true,
                message: deletedEmployee
            }

        }else{

            response = {
                status: false,
                message: `No employee found with id: ${id}`

            }
        }

    }catch(error){

        console.log("deleteEmployee error: ", error.message);

        response = {
            status: false,
            message: error.message
        }

    }

    return response;
    
};

module.exports = deleteEmployee;