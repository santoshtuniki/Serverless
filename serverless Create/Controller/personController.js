const savePerson = require('../Services/personServices');

const connectDB = require('../dbconfig');

export const create = async (event) => {
    try {
        // connection to db
        await connectDB();

        // saving the record
        const response = await savePerson(event);
        console.log("person status: ", response);

    } catch (error) {

        console.log("personController error: ", error.message);
        
    }
};