const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 30,
    unique:1
  },
  password: {
    type: String,
    minlength: 10,
    maxlength: 30,
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
})

const User = mongoose.model('user', userSchema)

module.exports = User