// you just wrote a JWT authentication middleware
const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    const headerToken = req.header("authorization");
    // If headerToken is not null/undefined, call .replace(...)
    const token = headerToken?.replace("bearer ", "");
    if(!token) return res.status(401).json({error: "No token"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // If valid → decoded contains the payload (like { id: "12345", iat: 123456, exp: 123456 })
        req.userId = decoded.id;
        next();
    }catch(err){
        res.status(401).json({error: "Invalid token"});
    }
}

module.exports = auth;