const express = require('express');

const app = express();

app.use((req,res,next)=>{
     console.log('middleware')
     next();
})
app.use((req,res,next)=>{
    console.log('Another middleware')
    res.send(`<h1>This is Express JS Server</h1>`)
})


app.listen(5000,()=>{
    console.log("port is running ")
})