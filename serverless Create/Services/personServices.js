const Person = require("../Model/personSchema");

const savePerson = async (event) => {
    let response;

    try {
        console.log("Event body: ", event.body);

        const payload = JSON.parse(event.body)
        console.log("payload: ", payload)

        let person = new Person(payload);
        await person.save();

        response = {
            status: true,
            message: "Person added to DB"
        };

    }catch(error){
        console.log("personServices error: ", error.message);
        
        response = {
            status: false,
            message: error.message
        };
    }

    return response;
};

module.exports = savePerson;