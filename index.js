const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//routes

app.use("/api/projects", require("./routes/projects"));


app.listen(4001, () => {
    console.log("Server is running on port 4001");
})