const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    number:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    pswd:{
        type: String,
        required: true
    },

    cpswd:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('registeruser', userSchema);