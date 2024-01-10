const express=require("express")
const router =express.Router()
const userContoller=require("../contollers").articole;

router.post("/addArticol", userContoller.addArticol);

module.exports=router;