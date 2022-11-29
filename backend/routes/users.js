const router = require('express').Router();
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')


//update a user
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin)
    {
        try {
            if(req.body.password)
            {
                const Salt = await bcrypt.genSalt(10);
                const hashedPass = await bcrypt.hash(req.body.password, Salt);
                req.body.password = hashedPass
            }
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true})
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json()
        }
    }else{
        return res.status(403).json("You can only update your account")
    }
})


//delete a user 
router.delete("/:id", async(req,res)=>{
    try {
        if(req.params.id === req.body.userId || req.body.isAdmin)
        {
            await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).json("User is Deleted Sucessfully")
        }
        else{
            res.status(403).json("You can only delete your account")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}
)


//get a user
router.get("/:id", async(req, res)=>{
    try {
        const getUser = await UserModel.findById(req.params.id);
        const{isAdmin, password, ...other} = getUser._doc;
        res.status(200).json(other) 
    } catch (error) {
        res.status(500).json(error)
    }
})

//follow a user 
router.put("/:id/follow", async(req, res)=>{
    if(req.body.userId !== req.params.id){
        try {

            const User = await UserModel.findById(req.params.id);
            const currentUser = await UserModel.findById(req.body.userId);
            if(!User.followers.includes(req.body.userId))
            {
                await User.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{following:req.params.id}})
                res.status(200).json("User has been followed")
            }
            else{
                res.status(403).json("You already follow this user")
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("You cannot follow yourself")
    }
})


//unfollow a user 
router.put("/:id/unfollow", async(req, res)=>{
    if(req.params.id !== req.body.userId)
    {
        try {
            const User = await UserModel.findById(req.params.id);
            const currentUser = await UserModel.findById(req.body.userId);
            if(currentUser.following.includes(req.params.id))
            {
                await User.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{following:req.params.id}})
                res.status(200).json("You have unfollowed the user")

            }
            else{
                res.status(403).json("You don't follow this user")
            }
            
        } catch (error) {
            res.status(500).json(error)
        }

    }
    else{
        res.status(400).json("You cannot unfollow yourself")
    }
})


module.exports = router