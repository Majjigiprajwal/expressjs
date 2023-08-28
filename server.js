const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contact = require('./routes/contact');
const success = require('./routes/success');

const app = express();

app.use(bodyParser.urlencoded())

app.use(express.static(path.join(__dirname,'public')))

app.use("/admin",adminRoute);
app.use(shopRoute)
app.use(success);
app.use(contact);


app.use("/",(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})


app.listen(5000,()=>{
    console.log("port is running ")
})