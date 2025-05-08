const express = require("express");
const AddJobs = require("../models/AddJobs");
const Router = express.Router();
Router.post("/add", async (req, res) => {
  try {
    const {
      type,
      title,
      description,
      salary,
      location,
      company,
      company_description,
      contact_email,
      contact_phone,
    } = req.body;
    console.log(req.body);
    if (
      !type ||
      !title ||
      !description ||
      !salary ||
      !location ||
      !company ||
      !company_description ||
      !contact_email ||
      !contact_phone
    ) {
      return res
        .status(400)
        .json({ msg: "All fields are required", req: req.body });
    }
    const addJobs = await AddJobs.create({
      type,
      title,
      description,
      salary,
      location,
      company,
      company_description,
      contact_email,
      contact_phone,
    });
    console.log(addJobs);

    res.status(201).json({ msg: "Job added successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
});
Router.put("/:id",async(req,res)=>{
  try {
    const update = await AddJobs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!update) {
      return res.status(404).json({ msg: "Job not found" });
    }
    res.status(200).json({msg:"Job Updated Successfully",update})
  } catch (error) {
    res.status(500).json({msg:"Error",error})
  }
});
Router.delete("/:id",async(req,res)=>{
  try {
    const deletedJob = await AddJobs.findByIdAndDelete(req.params.id);
    if(!deletedJob){
      return res.status(404).json({msg:"Job not found"})
    }
    res.status(200).json({msg:"Job deleted successfully"});
  } catch (error) {
    res.status(500).json({msg:"Error",error})
  }
})

module.exports = Router;
