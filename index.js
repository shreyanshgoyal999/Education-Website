const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connect Successful")
})
.catch((err)=>{
    console.log(err)
})


const app = express();
const port = process.env.PORT || 3000;


// Setting view engine and views path
app.set("view engine", "hbs")
app.set("views", "templates/views")


app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Serving Static files
app.use(express.static("./"))


// Defining Schema and model
const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    number : Number,
    concern : {
        type:String,
        trim:true
    }
})

const contactData = new mongoose.model("contactData",contactSchema)


// Routing
app.get("/",(req,res)=>{
    res.render("index.hbs")
})

app.post("/contact",async(req,res)=>{
    
    try{
        const doc = new contactData(req.body)
        await doc.save();
        res.render("index.hbs",{status:"Submitted !"})
    }
    catch(err){
        res.send(err)
    }
})

app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})