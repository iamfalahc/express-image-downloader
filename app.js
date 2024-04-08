const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/download",(req,res)=>{
    res.download(path.join(__dirname,"public/images/image1.jpeg"))
})
app.get("/download2",(req,res)=>{
    res.download(path.join(__dirname,"public/images/image2.jpeg"))
})
app.get("/download3",(req,res)=>{
    res.download(path.join(__dirname,"public/images/image3.jpeg"))
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
