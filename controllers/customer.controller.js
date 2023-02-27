//import express async handler
const expressAsyncHandler=require("express-async-handler")

//import customer model
const {Customers}=require("../database/models/customers.model")

//testing
exports.testCustomer=(req,res)=>{
    console.log("Customer API Working fine")
    res.send({message:"Customer API Working fine"})
}

exports.addCustomer=expressAsyncHandler(async(req,res)=>{
    await Customers.create(req.body)
    res.send({message:"Customer added sucessfully"})
})

exports.fetchCustomers=expressAsyncHandler(async(req,res)=>{
    let result=await Customers.findAll()
    res.send({message:"Customers are",payload:result})
})