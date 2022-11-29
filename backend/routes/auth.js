const router = require('express').Router();
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')


//Register a user 
router.post("/register", async(req,res)=>{

    const Salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, Salt)
    const User = new UserModel({...req.body, password:hashedPass})
    try {
        const savedUser = await User.save();
        res.status(200).json(savedUser)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//login a user
router.post("/login", async(req,res)=>{
try {
    const {username} = req.body;
    const newUser = await UserModel.findOne({username:username});

    if(newUser)
    {
        const validPassword = await bcrypt.compare(req.body.password, newUser.password)
        if(validPassword)
        {

            const {password, ...info} = newUser._doc;
            res.status(200).json(info)
        }
        else{
            res.status(403).json("Unauthorized access")
        }
    }
    else{
        res.status(400).send("user doesnot exist")
    }

} catch (error) {
    res.status(500).json(error) 
}
})


module.exports = router