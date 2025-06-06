const express = require("express");
const addJobs = require("./Routes/AddJobs.js");
const GetJob=require("./Routes/GetJobRoute.js");
const cors = require("cors");
const connectdb = require("./Utils/db.js");
const app = express();
connectdb();
app.use(cors({
  origin:'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/addjobs", addJobs);
app.use("/getjobs",GetJob);

app.use("/", (req, res) => {
  res.send({ message: "Hello World! This is the Job Portal API." });
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

