const User = require("../models/Auth.js");

exports.register = async (req, res)=>{
    try{
        const user = await User.create(req.body);
        const { password, ...userData } = user.toObject();
        res.status(202).json({message: "User registered", user});
    }catch(err){
        res.status(400).json({error: err.message|| "internal server error"});
    }
};