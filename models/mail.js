const mongoose = require('mongoose');

const mailList = new mongoose.Schema({
    email: String
})
const Email = new mongoose.model("Email", mailList)
module.exports = Email;