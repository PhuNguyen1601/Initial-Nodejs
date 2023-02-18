const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },
        address: { type: String },
        image: { type: String },
        birthDay: { type: Date },
        role: { type: String },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('User', UserSchema);
