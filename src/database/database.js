const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

function connectToDatabase() {
  mongoose.connect(mongoUri)
    .then(() => {
      console.log('MongoDB connected');
    }).catch((err) => {
      return console.log(`Error connecting to MongoDB: ${err}`);
    });
}

module.exports = connectToDatabase;