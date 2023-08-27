const express = require('express');

const router = express.Router();

router.get("/add-products",(req,res,next)=>{
    res.send(`<form action="/admin/product" method="POST"><input type="text" name="title">
               <input type="text" name="size" >
               <button type="submit">Add</button> </form>`)
})

router.post('/product',(req,res)=>{
   console.log(req.body);
   res.redirect("/shop")
})

module.exports = router;