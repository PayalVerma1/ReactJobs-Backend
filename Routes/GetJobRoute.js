const express = require("express");
const AddJobs = require("../models/AddJobs");
const Router=express.Router();
Router.get("/get",async(req,res)=>{
    try {
        const jobs=await AddJobs.find();
        res.status(200).json(jobs);

    } catch (error) {
        res.status(500).json({msg:"Server Error",error});
    }
})
module.exports=Router;
