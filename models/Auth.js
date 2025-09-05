const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

// hash password before saving
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();//👉 This avoids hashing the password multiple times (e.g. if you update email, you don’t want the already-hashed password to be hashed again).
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


module.exports = mongoose.model("User", userSchema);