const mongoose = require("mongoose");

const Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    checked:{
        type:Number
    }
})
const Register = new mongoose.model("Register",Schema);

module.exports = Register;