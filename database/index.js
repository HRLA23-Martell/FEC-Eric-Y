const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/qanda', {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('Connected to database!!')
});

module.exports = { connection };