const mongoose = require('mongoose');

const aboutUsSchema = new mongoose.Schema({
  description: String,
  imageURL: String,
});

const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;