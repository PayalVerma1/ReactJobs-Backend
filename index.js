const express = require("express");
const addJobs = require("./Routes/AddJobs.js");
const GetJob=require("./Routes/GetJobRoute.js");
const connectdb = require("./Utils/db.js");
const app = express();
connectdb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/addjobs", addJobs);
app.use("/",GetJob);

app.use("/", (req, res) => {
  res.send("Hello World! This is the Job Portal API.");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

