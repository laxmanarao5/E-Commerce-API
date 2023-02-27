//import express
const exp=require("express")

//create router
const customerApp=exp.Router()


customerApp.use(exp.json())

const {testCustomer,addCustomer,fetchCustomers}=require("../controllers/customer.controller")

customerApp.get("/test",testCustomer)

//create user route
customerApp.post("/customer",addCustomer)

//Fetch all customers
customerApp.get("/customers",fetchCustomers)


//export router
module.exports=customerApp