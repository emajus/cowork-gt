const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
// This code defines a Mongoose schema and model for a User in a MongoDB database.
// The schema includes fields for name, email, and password. The email field is unique, meaning no two users can have the same email address.
