const mongoose = require ('mongoose')

const employeeSchema = new mongoose.Schema({
    firstname: {
        type:String
    },
    lastname:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
})

// const EmployeModel = mongoose.model("Register", EmployeeSchema);
// module.exports = EmployeModel

module.exports=mongoose.model('register',employeeSchema)

