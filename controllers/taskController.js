const Task = require("../models/Task")


exports.createTask = async (req,res)=>{
    try{
        const task = await Task.create({...req.body, user: req.userId});
        res.status(201).json({msg: "Task is Created", task})
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

exports.deleteTask = async (req, res)=>{
    const delTask = await Task.findOneAndDelete({_id: req.params.id, user: req.userId},{new: true});
    if(delTask){
        res.status(200).json({msg: "task is deleted", delTask});
    }else{
        res.status(400).json({msg: "Invalid reques", status: false});
    }
}

exports.updateStatus = async (req,res)=>{
    try{
  
    const updateTask = await Task.findOneAndUpdate(
          {_id: req.params.id, user: req.userId},
          {status: req.body.status}, {new: true}
);


    if(updateTask){
        res.status(200).json({msg: "update Status", updateTask});
    }else{
        res.status(404).json({msg: "Task not found or unauthorized", status: false})
    }

    }catch(err){
        res.status(500).json({msg: "Internal server error", status: false});
    }
}

exports.updatePriority = async (req,res)=>{
   try{
     const updateTask = await Task.findOneAndUpdate(
        {_id: req.params.id, user: req.userId},
        {priority: req.body.priority},
        {new: true}
     );

     if(updateTask){
        res.status(200).json({msg: "priority is updated", updateTask});
     }else{
        res.status(404).json({msg: "task is not found", status: false});
     }
   }catch(err){
    res.status(500).json({msg: "Internal server error", status: false})
   }
}