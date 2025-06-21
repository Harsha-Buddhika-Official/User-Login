const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();
app.use(express.jason())
app.user(cors())

mongoose.connect("mongodb://localhost:27017/empolyee")