// // models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
  type: String,
 // enum: ['student', 'organizer', 'admin', 'STUDENT', 'ORGANIZER', 'ADMIN'],
 enum: ['STUDENT', 'COLLEGE_ADMIN', 'SUPER_ADMIN'],
  default: 'student'
}
  // role: {
  //   type: String,
  //   enum: ['student', 'organizer', 'admin'],
  //   default: 'student'
  // }
});

module.exports = mongoose.model('User', userSchema);
