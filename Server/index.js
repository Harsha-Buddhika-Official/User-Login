const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")


const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee")

app.post('/register', (req, res) => {
    console.log('Received data:', req.body);
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(error => {
            console.error('Error saving to database:', error);
            res.status(500).json({ error: 'Failed to save data' });
        });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})