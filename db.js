// const mongoose = require('mongoose');
// const mongoURl = "mongodb://localhost:27017/"
// // this Function will connect to the Mongodb
// const ConnectToMongo = async()=>{
// 	  await mongoose.connect('mongodb://127.0.0.1:27017/CodingArena');
// 	  console.log("Mongoose connected ")
// }

// module.exports = ConnectToMongo;


const mongoose = require('mongoose');

// Use environment variable or default to a local MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/CodingArena';

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongoose connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = ConnectToMongo;
