const express = require('express')
const multer =require('multer')
const path = require('path')
const app=express()

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        console.log(file) 
        cb(null, Date.now() +path.extname(file.originalname))
    }
})

const upload =multer({storage:storage})
app.set('view engine','ejs')

app.get('/upload',(req,res)=>{
    res.render('upload')
})

app.post('/uploadImg',upload.single('image'),(req,res)=>{
    res.send("image uploaded")
    console.log("post upload");
})

app.listen(3000,()=>{
    console.log("server running..!");
})