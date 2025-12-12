const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 8080;
const employeRouter = require("./router/employeRouter")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1/interview").then(() => {
    console.log("connected");
}).catch((e) => {
    console.log(e);
})
app.use("/api", employeRouter)
app.listen(PORT, () => {
    console.log("sever is running on " + PORT);
})