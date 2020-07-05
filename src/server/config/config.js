const mongoose = require("mongoose");

const connection =
  "mongodb+srv://pani-wala:pani-wala@cluster0.yu3ij.mongodb.net/pani-wala?retryWrites=true&w=majority";

mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
