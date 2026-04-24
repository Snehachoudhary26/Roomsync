const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName:   { type: String, required: true },
  lastName:    { type: String, required: true },
  email:       { type: String, required: true, unique: true },
  phone:       { type: String, required: true },
  city:        { type: String, required: true },
  role:        { type: String, required: true },
  password:    { type: String, required: true },
  quizAnswers: { type: [Number], default: [] },
  compatibility: {
    sleep:       { type: Number, default: 0 },
    social:      { type: Number, default: 0 },
    cleanliness: { type: Number, default: 0 },
    workStyle:   { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
