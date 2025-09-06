const Task = require("../models/Task")


exports.createTask = async (req,res)=>{
    try{
        const task = await Task.create({...req.body, user: req.userId});
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getTask = async(req,res)=>{
    const tasks = await Task.find({user: req.userId});
    res.status(200).json({msg: "these are all tasks related to user", tasks});
};

exports.updateTask = async(req,res)=>{
    const task = await Task.findOneAndUpdate({_id: req.params.id, user: req.userId},
        req.body,
        {new: true}
    );
    if(task){
        res.status(200).json({msg: "task Updated", task});
    }else{
        res.status(400).json({msg: "task not updated", status: false});
    }
};