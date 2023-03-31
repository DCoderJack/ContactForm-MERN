const mongoose = require('mongoose');

const { Schema } = mongoose;

const userdataSchema = new Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number
    },
    phoneno : {
        type : Number,
        required : true,
        unique : true
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    timeStamp : {
        type : Date,
        default : Date.now
    }
  });

const Data = mongoose.model('UserData', userdataSchema);

module.exports = Data;

