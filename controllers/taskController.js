const Task = require("../models/Task")


exports.createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json
    }
}