const express = require("express");
const AddJobs = require("../models/AddJobs");
const Router = express.Router();
Router.post("/", async (req, res) => {
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
module.exports = Router;
