const User = require("../models/Auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res)=>{
    try{
        const user = await User.create(req.body);
        // const { password, ...userData } = user.toObject();
        res.status(201).json({message: "User registered", user});
    }catch(err){
        res.status(400).json({error: err.message|| "internal server error"});
    }
};

// user login

exports.login = async (req,res)=>{
    let {email, password} = req.body;
    let user = await User.findOne({email});

    if(!user) return res.status(400).json({error: "invalid email"});

    let isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({error: "invalid password"});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn: "1d"} );
    console.log(token);
    console.log(user)
    res.json({message: "Login successful", token, user});
};