const express=require('express')
const router=express.Router()

//making routes
router.get('/add-product',(req,res,next)=>{
    res.send('<form method="POST" action="/products"><input type="text" name="title">Enter Product Name</input><input type="text" name="size">Enter Size</input><button type="submit">Add Product</button></form>')
})
router.post('/products',(req,res,next)=>{ //using post so that /products route cannot be acees from browser 
    console.log(req.body) //here we got our input value, but before getting it we have to parse it by insatlling an package npm install --save body-parser
    res.redirect('/')
})
module.exports=router