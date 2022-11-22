const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
const Register = require("./models/register.js")

app.use(bodyParser.urlencoded({extended:true}))
require("./db/conn.js");

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname ,"../template/views");
const partial_path = path.join(__dirname ,"../template/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path)
hbs.registerPartials(partial_path);




app.get("/link" ,(req , res)=>{
    res.render("index");
})
app.get("/" ,(req , res)=>{
    res.render("login");
})
app.get("/register" ,(req , res)=>{
    res.render("registration");
})

app.post("/register",(req , res)=>{
    let newName = new Register({
        name : req.body.name,
        password: req.body.password,
        link: req.body.link
    })
    newName.save();
    res.redirect("/register")
})

app.post("/",async(req ,res)=>{
    try {
        const name = req.body.name;
        const password = req.body.password;
        const username = await Register.findOne({name:name})
        if(username.password === password){
            res.status(201).render("index" ,{
                name: username.name,             
                link: username.link             
            } );

        }
        else{
            req.send("wrong name  / password")
        }

    } catch (error) {
            res.send("invalid")
    }
})




app.listen(port ,()=>{
    console.log("server .......");
})