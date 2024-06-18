const mongoose = require('mongoose');

const student = new mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    phone: Number,
    school: String,
    age: Number
});

const Student = new mongoose.model("Student", student)
module.exports = Student;