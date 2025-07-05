const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dateOfBirth: Date,
    password: String
})
const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel;
