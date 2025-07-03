const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/employee")
const port = 5001;

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

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.find({ email, password })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.status(200).json({ success: true, message: "Successfully Logged In" });
        } else {
          res.status(401).json({ success: false, message: "Password is incorrect" });
        }
      } else {
        res.status(404).json({ success: false, message: "User does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, message: "Server error", error: err });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})