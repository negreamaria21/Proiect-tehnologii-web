const express= require("express")
const router=express.Router();
const ArticoleRouter=require("./articol")

router.use("/Articol", ArticoleRouter)

module.exports=router;