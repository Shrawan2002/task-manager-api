const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRouter"));
app.use("/api/tasks", require("./routes/taskRouter"));


app.get("/", (req, res) => {
  res.send("API running...");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
