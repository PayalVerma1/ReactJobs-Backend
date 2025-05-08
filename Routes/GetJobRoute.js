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
});
Router.get("/get/:id",async(req,res)=>{
    try { const job=await AddJobs.findById(req.params.id)
      if(!job){
        return res.status(404).json({msg:"Job not found"})
      }
      res.status(200).json(job)
      
    } catch (error) {
      res.status(500).json({msg:"Server Error",error})
    }
  
  });
module.exports=Router;
