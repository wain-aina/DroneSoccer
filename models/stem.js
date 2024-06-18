const mongoose = require('mongoose');

const stem = new mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    phone: Number,
    school: String,
    service: String
});

const Stem = new mongoose.model("Stem", stem)
module.exports = Stem;