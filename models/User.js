const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    userCreated: {
        type: Date,
        default: Date.now
    }

});


const User = mongoose.model("User", UserSchema);

module.exports = User;