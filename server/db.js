const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://mongodb-service/studentdevdb`, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
