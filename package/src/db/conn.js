const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parth-ieee:parth-ieee@cluster0.div3qr1.mongodb.net/datalytics?retryWrites=true&w=majority").then(()=>{
    console.log("connec");
}).catch((e)=>{
    console.log("la");
})
