const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/college"; // You need to specify the database name here

const connectToMongo = () => {
    return mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
}

module.exports = connectToMongo;
    