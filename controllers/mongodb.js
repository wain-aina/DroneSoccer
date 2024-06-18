require("dotenv").config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(
    "mongodb://" + process.env.U_NAME + ":" + process.env.U_PASS + "@" + process.env.LOCATION + ":27017/" + process.env.DB_NAME + "?authSource=" + process.env.AUTH_SRC,
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('MongoDB Cluster Connected');
});

module.exports = mongoose;