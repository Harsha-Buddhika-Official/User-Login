const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    dateOfBirth: Date,
    password: String,
})
const EmployeeModel = mongoose.model("Employee", EmployeeSchema)
module.exports = EmployeeModel;
