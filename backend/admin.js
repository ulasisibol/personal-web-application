const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    homeTitle1: {
        type: String,
        required: true
    },
    currentlyWork: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Admin', AdminSchema);