const PostModel = require('../models/Post');
const UserModel = require('../models/User');

const router = require('express').Router();

//create a post 
router.post("/", async(req,res)=>{
    const newPost = new PostModel(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a post 
router.put("/:id", async(req, res)=>{
    try {
    const post = await PostModel.findById(req.params.id);
    if(req.body.userId === post.userId)
    {
        const updatedPost = await post.updateOne({$set:req.body})
        res.status(200).json("Post has been updated")
    }else{
        res.status(403).json("Action forbidden")
    }
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete a post
router.delete("/:id", async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id)
        console.log(post)
        if(req.body.userId === post.userId)
        {
            await post.deleteOne();
            res.status(200).json("Post has been deleted sucessfully")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


//like or unlike a post

router.put("/:id/like", async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id);
        console.log(post)
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("Post has been liked")
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("Post has been disliked")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//get a post 
router.get("/:id", async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id);
        res.status(200).json(post)  
    } catch (error) {
        res.status(500).json(error)
    }
})



//get timeline post 
router.get("/timeline/all", async(req, res)=>{
    try {
    const currentUser = await UserModel.findById(req.body.userId);
    const userPosts = await PostModel.find({userId:currentUser._id})
   const friendPosts = await Promise.all(
    currentUser.following.map((friendId) => {
         return PostModel.find({userId:friendId})
    }
   )
   );
   res.status(200).json(userPosts.concat(...friendPosts))
        
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router