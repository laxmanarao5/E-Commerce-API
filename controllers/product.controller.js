//import sequelize
//import express async handler
const expressAsyncHandler=require("express-async-handler")


const {Products}=require("../database/models/products.model")


exports.testProduct=(req,res)=>{
        console.log("Product API Working fine")
        res.send({message:"Product API Working fine"})
}

exports.addProduct=expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
    await Products.create(req.body)
    res.send({message:"Product added sucessfully"})
})

exports.fetchProducts=expressAsyncHandler(async(req,res)=>{
    let result=await Products.findAll()
    res.send({message:"Products are",payload:result})
})