// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://localhost:27018/UAS');
  console.log('DB connected')
}

module.exports = mongoDB

