const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/employee")
const port = 5001;

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee")

app.post('/login' , (req,res) => {
  const { email, password } = req.body
  EmployeeModel.findOne({email: email})
  .then(user => {
    if(user){
      if(user.password == password){
        const {password, ...userData} = user.toObject();
        res.status(200).json({success: true, message:"Successfull login", user: userData});
        console.log("User logged in successfully:", userData);
      } else {
        res.status(401).json({success: false, message:"Password incorrect"})
      }
    } else {
        res.status(404).json({success: false, message:"User does not exist"})
    }
  })
  .catch(err => {
    res.status(500).json({ success: false, message: "Server error", error: err });
  });
})

app.post('/register', (req, res) => {
    console.log('Received data:', req.body);
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(error => {
            console.error('Error saving to database:', error);
            res.status(500).json({ error: 'Failed to save data' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})