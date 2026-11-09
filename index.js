const express = require("express")
const mongoose = require('mongoose');
const app = express();
const port= 30001;

app.get("/",(req,res)=>{
    res.send("sucessfully running is server")
})

const mongoBD= async()=>{
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("sucessfully is running");
        
        
    } catch (error) {
        console.log("sucessfully is not running");
        
        
    }
}


const blogSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  description: String,
  createdAt:{
    type:Date,
    default:Date.now(),
  },
});

const Blog = mongoose.model('Blog', blogSchema);

app.listen(port,async()=>{
    console.log(`server is sucessfully running http://localhost:${port}`);
  await mongoBD();
    
})